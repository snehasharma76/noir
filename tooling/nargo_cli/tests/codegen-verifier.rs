//! This integration test aims to check that the `nargo codegen-verifier` will successfully create a
//! file containing a verifier for a simple program.

use assert_cmd::prelude::*;
use predicates::prelude::*;
use std::process::Command;

use assert_fs::prelude::{PathAssert, PathChild};

#[test]
fn simple_verifier_codegen() {
    let test_dir = assert_fs::TempDir::new().unwrap();
    std::env::set_current_dir(&test_dir).unwrap();

    // Create trivial program
    let project_name = "hello_world";
    let project_dir = test_dir.child(project_name);

    let mut cmd = Command::cargo_bin("nargo").unwrap();
    cmd.arg("new").arg(project_name);
    cmd.assert().success();

    std::env::set_current_dir(&project_dir).unwrap();

    // Run `nargo codegen-verifier`
    let mut cmd = Command::cargo_bin("nargo").unwrap();
    cmd.arg("codegen-verifier");
    cmd.assert()
        .success()
        .stdout(predicate::str::contains("Contract successfully created and located at"));

    let solidity_file = project_dir.child("contract").child("hello_world").child("plonk_vk.sol");

    solidity_file.assert(predicate::path::is_file());

    let file_contents = std::fs::read_to_string(solidity_file).unwrap();

    // Assert that file contains the expected number of each contract/library.
    assert_eq!(file_contents.matches("library UltraVerificationKey").count(), 1);
    assert_eq!(file_contents.matches("abstract contract BaseUltraVerifier").count(), 1);
    assert_eq!(file_contents.matches("contract UltraVerifier").count(), 1);
}

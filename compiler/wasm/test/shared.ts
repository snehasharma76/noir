export function getPaths(basePath: string) {
  const fixtures = `${basePath}/public/fixtures`;

  const simpleScriptSourcePath = `${fixtures}/simple/src/main.nr`;
  const simpleScriptExpectedArtifact = `${fixtures}/simple/target/noir_wasm_testing.json`;

  const depsScriptSourcePath = `${fixtures}/with-deps/src/main.nr`;
  const depsScriptExpectedArtifact = `${fixtures}/with-deps/target/noir_wasm_testing.json`;

  const libASourcePath = `${fixtures}/deps/lib-a/src/lib.nr`;
  const libBSourcePath = `${fixtures}/deps/lib-b/src/lib.nr`;

  const libCProjectPath = `${fixtures}/deps/lib-c`;
  const libCSourcePath = `${libCProjectPath}/src/lib.nr`;
  const libCModulePath = `${libCProjectPath}/src/module.nr`;
  const libCModuleSourcePath = `${libCProjectPath}/src/module/foo.nr`;
  const libCTOMLPath = `${libCProjectPath}/Nargo.toml`;

  const contractProjectPath = `${fixtures}/noir-contract`;
  const contractSourcePath = `${contractProjectPath}/src/main.nr`;
  const contractTOMLPath = `${contractProjectPath}/Nargo.toml`;
  const contractExpectedArtifact = `${contractProjectPath}/target/test-TestContract.json`;

  return {
    simpleScriptSourcePath,
    simpleScriptExpectedArtifact,
    depsScriptSourcePath,
    depsScriptExpectedArtifact,
    libASourcePath,
    libBSourcePath,
    libCProjectPath,
    libCSourcePath,
    libCModulePath,
    libCModuleSourcePath,
    libCTOMLPath,
    contractProjectPath,
    contractSourcePath,
    contractTOMLPath,
    contractExpectedArtifact,
  };
}

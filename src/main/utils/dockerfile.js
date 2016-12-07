import validateDockerfile from 'validate-dockerfile'
import fsp from 'fs-promise'

function isDockerFile(filePath) {
  // TODO: check file size before load (fsp.stat())
  return fsp.readFile(filePath, {encoding:'utf8'})
    .then(contents => {
      var ret = validateDockerfile(contents)
      var isValid = ret && ret.valid
      if (!isValid) {
        console.error(ret)
      }
      return isValid
    })
}

const dockerfileUtils = {
  isDockerFile
}

export default dockerfileUtils

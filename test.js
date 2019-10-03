const core = require('@actions/core')
const github = require('@actions/github')
const exec = require('@actions/exec')

const action = async () => {
  try {
    const dir = core.getInput('dir')
    await exec.exec('yarn', ['--cwd', dir])
    await exec.exec('yarn', ['--cwd', dir, 'test'])
  } catch (error) {
    core.setFailed(error.message)
  }
}

action()

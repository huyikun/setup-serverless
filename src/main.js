const core = require('@actions/core')
const { wait } = require('./wait')

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
async function run() {
  try {
    const access_alias = core.getInput('access_alias', { required: true });
    const account_id = core.getInput('account_id', { required: true });
    const access_key_id = core.getInput('access_key_id', { required: true });
    const access_key_secret = core.getInput('access_key_secret', { required: true });
    const result = {access_alias, account_id, access_key_id, access_key_secret};
    core.setOutput('res', result)
  } catch (error) {
    // Fail the workflow run if an error occurs
    core.setFailed(error.message)
  }
}

module.exports = {
  run
}

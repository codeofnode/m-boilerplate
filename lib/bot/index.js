const assert = require('assert')

/**
 * @module bot
 */

/**
 * The Bot class
 * @class
 */
class Bot {
  /**
   * Create an instance of Bot class
   *
   * @param {Object} properties the properties of bot
   * @param {Object} properties.name name of bot
   * @param {Application} app the mbjs application instance
   */
  constructor ({
    name = null
  }, app) {
    assert.strictEqual(typeof name, 'string', 'name MUST_BE_STRING')
    /** the name of bot
      * @member {String} */
    this.name = name
    this.throwError = app.throwError.bind(app)
  }

  /**
   * Start the build based on argument
   *
   * @returns {Promise} the promise about build finish
   */
  speak () {
    console.log(`Hey there, This is ${this.name}. - ${this._argv.toSpeak}`)
  }

  /**
   * Start the build based on argument
   *
   * @returns {Promise} the promise about build finish
   */
  async start () {
    if (typeof this[this._argv._[0]] === 'function') {
      await this[this._argv._[0]]()
    }
  }

  /**
   * Set cli flags and commands
   *
   * @param {Yargs} yargs the instance of yargs
   */
  setCli (yargs) {
    yargs.command('speak [toSpeak]',
      'Speak something for you',
      (yargs) => {
        return yargs.positional('toSpeak', {
          type: 'string',
          describe: 'What would you like bot to speak?',
          default: 'Howdy!'
        })
      }
    )
    this._argv = yargs.argv
  }
}

module.exports = Bot

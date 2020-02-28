#!/usr/bin/env node

const Application = require('mbjs')

Application.main(__dirname)
  .then(() => {})
  .catch((er) => {
    console.error(er)
    process.exit(1)
  })

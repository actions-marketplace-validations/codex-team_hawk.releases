import path from 'path';
import * as core from '@actions/core';
import shell from 'shelljs'

try {
    /**
     * Define path to shell script
     * @type {string}
     */
    const pathToScript = path.join(__dirname, 'bin', 'hawk-releases.sh');

    /**
     * Get params
     */
    const release = core.getInput('release');
    const token = core.getInput('token');
    const collectorEndpoint = core.getInput('collectorEndpoint');

    if (!release) {
        throw new Error('`release` param is missing');
    }

    if (!token) {
        throw new Error('`token` param is missing');
    }

    // @todo sanitize fields to avoid command injection

    const result = shell.exec(`${pathToScript} -r="${release}" -t="${token}" -ce="${collectorEndpoint}"`);

    core.debug(result);
} catch (error) {
    core.setFailed(error.message);
}

# Hawk.release

This repository can help you collect data to send Hawk releases.

### Script for sending commits

To make it easier to send commits, you can use a [shell script](./scripts/commits.sh) that will take the last few commits and send them to the collector.

#### [commits.sh](./scripts/commits.sh) arguments
| Argument name | Required | Description |
| -- | -- | -- |
| `-t` \| `--token` | Yes | Hawk integration token for your project. |
| `-r` \| `--release` | Yes | Release name. Any string that will be associated with project events. |
| `-ce` \| `--collectorEndpoint` | No | Endpoint to send release data. |
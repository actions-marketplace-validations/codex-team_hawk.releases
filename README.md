# Hawk.release

This repository can help you collect data to send Hawk releases.

### Script for sending commits

To make it easier to send commits, you can use a [shell script](bin/commits.sh) that will take the last few commits and send them to the collector.

#### [commits.sh](bin/commits.sh) arguments
| Argument name | Required | Description |
| -- | -- | -- |
| `-t` \| `--token` | Yes | Hawk integration token for your project. |
| `-r` \| `--release` | Yes | Release name. Any string that will be associated with project events. |
| `-ce` \| `--collectorEndpoint` | No | Endpoint to send release data. |

Example of a script call:

```bash
$ ./commits.sh -r="Version 2.0.1" -t=eyJpbnRlZ3JhdGlvbklkIjoiNTczM2ViODgtMDEzZi00MzE3LTkyMWQtNWViYWY3OTljNmYyIiwic2VjcmV0IjoiZmE3OGI2NjMtMTg5OS00NzUzLTgwOTktODlhYTdmMjA4MjJjIn0= 
```

Expected output:

```
Sending 2 commits for the 'Version 2.0.1' release to https://5733eb88-013f-4317-921d-5ebaf799c6f2.k1.hawk.so/release
{"code":200,"error":false,"message":"OK"}
```

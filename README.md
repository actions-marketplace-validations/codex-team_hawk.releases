# Hawk releases

Hawk releases sender will help you collect commits data and send as releases.

You can use this [action](#action) in workflow or pull the bash [script](#script) and run it yourself.

## Script

To make it easier to send commits, you can use a shell script [hawk-releases.sh](bin/hawk-releases.sh)
that will take the last few commits and send them to the collector.

### [hawk-releases.sh](bin/hawk-releases.sh) arguments

| Argument name | Required | Description |
| -- | -- | -- |
| `-t` \| `--token` | Yes | Hawk integration token for your project. |
| `-r` \| `--release` | Yes | Release name. Any string that will be associated with project events. |
| `-ce` \| `--collectorEndpoint` | No | Endpoint to send release data. |

Get the script

```bash
curl https://raw.githubusercontent.com/codex-team/hawk.release/master/bin/hawk-releases.sh -O
```

Example of a script call:

```bash
./hawk-releases.sh -r="Version 2.0.1" -t=eyJpbnRlZ3JhdGlvbklkIjoiNTczM2ViODgtMDEzZi00MzE3LTkyMWQtNWViYWY3OTljNmYyIiwic2VjcmV0IjoiZmE3OGI2NjMtMTg5OS00NzUzLTgwOTktODlhYTdmMjA4MjJjIn0= 
```

Expected output:

```
Sending 2 commits for the 'Version 2.0.1' release to https://5733eb88-013f-4317-921d-5ebaf799c6f2.k1.hawk.so/release
{"code":200,"error":false,"message":"OK"}
```

## Action

Use `codex-team/hawk.releases@v1` in build workflow to send commits as release data to Hawk.

### Inputs

#### `release` (required)

Release identifier. For example package version or any other defined value which will be available in project's code.

#### `token` (required)

Project token from Hawk.

#### `collectorEndpoint`

Optional custom collector endpoint.

### Example of usage

```
- name: Get package info
  id: package
  uses: codex-team/action-nodejs-package-info@v1

- name: Send release data
  uses: codex-team/hawk.releases@v1
  with:
    release: ${{ steps.package.outputs.name }}-${{ steps.package.outputs.version }}
    token: ${{ secrets.HAWK_TOKEN }}
```

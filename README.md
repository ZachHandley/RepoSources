# RepoSources

Static JSON files mapping Linux distro package names to Homebrew formula names, hosted via GitHub Pages at [zachhandley.github.io/RepoSources](https://zachhandley.github.io/RepoSources).

## What it does

A Forgejo workflow runs weekly on a self-hosted runner, paginates the [Repology API](https://repology.org), and generates JSON mapping files for Debian 12, Ubuntu 24.04, and Alpine 3.20 packages to their Homebrew equivalents. The results are force-pushed to the `gh-pages` branch on GitHub, which triggers a GitHub Actions workflow to deploy to GitHub Pages.

## Data flow

1. **Forgejo** (self-hosted, Alpine container) runs `scripts/generate-maps.py`
2. Script paginates Repology API, generates `docs/maps/{debian,ubuntu,alpine,all}.json`
3. Forgejo pushes `docs/` contents to `gh-pages` branch on GitHub
4. **GitHub Actions** deploys `gh-pages` to GitHub Pages

## Files

| URL | Description |
|-----|-------------|
| `maps/debian.json` | Debian 12 package name -> Homebrew formula |
| `maps/ubuntu.json` | Ubuntu 24.04 package name -> Homebrew formula |
| `maps/alpine.json` | Alpine 3.20 package name -> Homebrew formula |
| `maps/all.json` | All distros combined in one file |

## JSON format

```json
{
  "metadata": {
    "generated_at": "2026-03-21T04:00:00Z",
    "source": "repology",
    "distro": "debian_12",
    "total_mappings": 4500
  },
  "mappings": {
    "libssl-dev": "openssl@3",
    "curl": "curl",
    "python3": "python@3"
  }
}
```

## Running manually

```bash
python3 scripts/generate-maps.py
```

Requires `requests` (`pip install requests` or `apk add py3-requests` on Alpine).

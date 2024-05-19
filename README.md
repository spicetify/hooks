```pwsh
cd $env.LOCALAPPDATA/spicetify/
rm -r $env.LOCALAPPDATA/spicetify/hooks/
git clone github.com/spicetify/hooks hooks/
cd hooks
tsc
```

## License

GPLv3. See [COPYING](COPYING).

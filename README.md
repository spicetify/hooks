```pwsh
cd $env.LOCALAPPDATA/bespoke/
rm -r $env.LOCALAPPDATA/bespoke/hooks/
git clone github.com/spicetify/hooks hooks/
cd hooks
tsc
```

## License

GPLv3. See [COPYING](COPYING).

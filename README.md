```pwsh
cd $env.LOCALAPPDATA/
rm -r $env.LOCALAPPDATA/hooks/
git clone github.com/spicetify/hooks hooks/
cd hooks
tsc
```

## License

GPLv3. See [COPYING](COPYING).

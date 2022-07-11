# YuConv-CLI
![Travis CI](https://img.shields.io/travis/artbit/yuconv-cli/master)
![GitHub issues badge](https://img.shields.io/github/issues/ArtBIT/yuconv-cli)
![GitHub forks badge](https://img.shields.io/github/forks/ArtBIT/yuconv-cli)
![GitHub stars badge](https://img.shields.io/github/stars/ArtBIT/yuconv-cli)
![GitHub license badge](https://img.shields.io/github/license/ArtBIT/yuconv-cli)
![Twitter badge](https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2FArtBIT%2Fyuconv-cli)


### Šta je ovo?

YuConv-cli je command line interface za [YuConv](https://github.com/ArtBIT/yuconv)

---

### Primeri korišćenja

#### Konvertuj tekst iz ćiriličnog u latinično pismo
    
    $ npx yuconv-cli to-latin cyrillic.txt > latin.txt

#### Pipe konvertuj tekst iz ćiriličnog u latinično pismo

    $ cat cyrillic.txt | npx yuconv-cli to-latin -

#### Napravite Bash alias-e
    
    $ alias 2lat='npx yuconv to-latin -'
    $ alias 2cyr='npx yuconv to-cyrillic -'

    $ pdftotext -layout izvod_iz_banke.pdf - | 2cyr | grep 'износ'

# Licenca
MIT

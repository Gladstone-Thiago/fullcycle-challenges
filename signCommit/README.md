# fullcycle-challenges - Advanced patterns and techniques with Git and Github
    Um dos principais pontos para aumentar segurança e a garantia de que um commit foi realmente realizado por determinado desenvolvedor é a assinatura de commits utilizando GPG.

    Nesse desafio, crie um repositório GIT no Github e faça um push de um commit assinado por você. 

## Commands
    gpg --list-secret-key --keyid-form LONG = list keys
    gpg --full-generate-key = generate key
    gpg --armor --export {keyId}
    git config --global user.signingkey {keyId}
    export GPG_TTY=$(tty)
    git config commit.gpgsign true or git config --global commit.gpgsign true
    git config tag.gpgSign true or git config --global tag.gpgSign true


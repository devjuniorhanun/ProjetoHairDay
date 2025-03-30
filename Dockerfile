# Nome da Imagem a ser baixada
FROM node:23.9.0-slim


# Instanciando o usuário node
USER node

# Diretorio de trabalho
WORKDIR /home/node/app

# Bloqueando o Terminal
CMD [ "tail", "-f", "/dev/null" ]
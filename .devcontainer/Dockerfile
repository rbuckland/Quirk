FROM mcr.microsoft.com/devcontainers/typescript-node:1-20-bookworm

# RUN  apt update && apt install -y software-properties-common python3-launchpadlib && \
#      add-apt-repository ppa:mozillateam/ppa && \
#      apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 9BDB3D89CE49EC21 && \
#      echo '\
# Package: *\
# Pin: release o=LP-PPA-mozillateam\
# Pin-Priority: 1001\
# ' | sudo tee /etc/apt/preferences.d/mozilla-firefox && \
#     curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg && \
#     install -o root -g root -m 644 microsoft.gpg /etc/apt/trusted.gpg.d/ && \
#     sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/edge stable main" > /etc/apt/sources.list.d/microsoft-edge-dev.list' && \
#     rm microsoft.gpg && \
#     apt-get update && \
#     apt install -y firefox chromium microsoft-edge-stable && \
#     rm -rf /var/lib/apt/lists/*



## this works

#  RUN  echo deb http://deb.debian.org/debian/ unstable main contrib non-free >> /etc/apt/sources.list && \
#      echo '\
# Package: *\
# Pin: release a=stable\
# Pin-Priority: 900\
# \
# Package: *\
# Pin: release a=unstable\
# Pin-Priority: 10\
# ' | sudo tee /etc/apt/preferences.d/mozilla-firefox

# RUN apt update && apt install -t unstable -y firefox
RUN  apt-get update && apt install -y chromium 

RUN curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg && \
    install -o root -g root -m 644 microsoft.gpg /etc/apt/trusted.gpg.d/ && \
    sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/edge stable main" > /etc/apt/sources.list.d/microsoft-edge-dev.list' && \
    rm microsoft.gpg && \
    apt-get update && \
    apt install -y microsoft-edge-stable

RUN apt install -y firefox-esr

RUN rm -rf /var/lib/apt/lists/*   


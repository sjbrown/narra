FROM node:latest

WORKDIR /workspace

# Optional but useful for debugging and git-based npm deps.
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        git \
        bash && \
    rm -rf /var/lib/apt/lists/*

CMD ["bash"]

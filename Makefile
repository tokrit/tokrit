# Install Project
install:
	npm install

# Run react.js project: Serves on localhost:3000
run: node_modules/
	npm start

# Build project for production
build: clean node_modules/
	npm run build

# Cleanup product of make install
clean:
	rm -rf dist node_modules

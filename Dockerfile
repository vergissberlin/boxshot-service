FROM alekzonder/puppeteer

# Create app directory
WORKDIR /app

# Copy application files
COPY app /app

# Install dependencies
RUN npm install
# If you are building your code for production
#RUN npm ci --only=production

EXPOSE 80
CMD ["npm", "run", "start"]

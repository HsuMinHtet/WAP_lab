const dns = require('dns');

const domainName = 'www.miu.edu';

dns.resolve4(domainName, (err, addresses) => {
  if (err) {
    console.error(`Error: ${domainName}: ${err.message}`);
  } else {
    console.log(`Domain ${domainName}: IP Address ${addresses.join(', ')}`);
  }
});

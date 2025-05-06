const evictionLRU = (size) => {
  const cache = new Map();
  return {
    has: (key) => cache.has(key),
    get: (key) => {
      const value = cache.get(key);
      cache.delete(key);
      cache.set(key, value);
      //   console.log("GET:", cache);
      return value;
    },
    put: (key, value) => {
      if (cache.size >= size) {
        const firstKey = cache.keys().next().value;
        cache.delete(firstKey);
        // console.log("REMOVED");
      }
      cache.set(key, value);
      //   console.log("PUT:", cache);
    },
  };
};

const evictionLFU = (size) => {
  const cache = new Map();
  return {
    has: (key) => cache.has(key),
    get: (key) => {
      const pair = cache.get(key);
      pair.freq += 1;
      //   console.log("GET:", cache);
      return pair.value;
    },
    put: (key, value) => {
      if (cache.size >= size) {
        let lfKey;
        let minFreq = Infinity;
        for (const [key, { freq }] of cache.entries()) {
          if (freq < minFreq) {
            minFreq = freq;
            lfKey = key;
          }
        }
        cache.delete(lfKey);
        // console.log("REMOVED");
      }
      cache.set(key, { value, freq: 1 });
      //   console.log("PUT:", cache);
    },
  };
};

const evictionTB = (limit) => {
  const cache = new Map();
  return {
    has: (key) => {
      const moment = Date.now();
      // console.log("MOMENT:", moment);
      if (cache.has(key)) {
        const pair = cache.get(key);
        // console.log("HAS:", moment - pair.timestamp < limit);
        return moment - pair.timestamp < limit;
      }
    },
    get: (key) => cache.get(key).value,
    put: (key, value) => {
      const moment = Date.now();
      // console.log("MOMENT:", moment);
      // console.log("BEFORE PUT:", cache);
      for (const [key, { timestamp }] of cache.entries()) {
        if (moment - timestamp > limit) cache.delete(key);
      }
      cache.set(key, { value, timestamp: Date.now() });
      // console.log("AFTER PUT:", cache);
    },
  };
};

module.exports = { evictionLRU, evictionLFU, evictionTB };

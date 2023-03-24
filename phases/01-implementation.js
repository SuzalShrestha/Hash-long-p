class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    // Initialize your buckets here
    // Your code here
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(numBuckets).fill(null);

  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
    // Your code here
    let loadFactor = this.count / this.capacity;
    if(loadFactor >= 0.7) this.resize();
    let index = this.hashMod(key);
    let pair = new KeyValuePair(key, value);
    let bucket = this.data[index];
    if(!bucket) {
      this.data[index] = pair;
      this.count++;
    } else {
      while(bucket.next) {
        if(bucket.key === key) {
          bucket.value = value;
          return;
        }
        bucket = bucket.next;
      }
      if(bucket.key === key) {
        bucket.value = value;
        return;
      }
      let curr=this.data[index];
      pair.next = curr;
      this.data[index]= pair;
      this.count++;
    }
  }
 

  read(key) {
    // Your code here
    let index=this.hashMod(key);
    if(this.data[index]){
      let bucket=this.data[index];
      while(bucket){
        if(bucket.key===key){
          return bucket.value;
        }
        bucket=bucket.next;
      }
    }

  }


  resize() {
    // Your code here
    let oldData = this.data;
    this.capacity = this.capacity * 2;
    this.data = new Array(this.capacity).fill(null);
    this.count = 0;
    for(let i = 0; i < oldData.length; i++) {
      let bucket = oldData[i];
      while(bucket) {
        this.insert(bucket.key, bucket.value);
        bucket = bucket.next;
      }
    }
  }


  delete(key) {
    // Your code here
  }
}
module.exports = HashTable;
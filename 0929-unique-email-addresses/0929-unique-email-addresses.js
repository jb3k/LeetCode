/**
 * @param {string[]} emails
 * @return {number}
 */
    
    //local name, domain name...
        // '.' local name... basically doesnt do anything
        // '+' local name... ignores everything after
    
    // let set = new Set()
    // loop thru emails
        // split each email by @
        // let new email = ''
        // loop thru the local name
            // if local has '.' then not going to add the new email
            // if local has '+' split it from there and only take 
        // add the domain name to new email
        // email = new email
        // set.push(email)
    // return set.size
        
    
var numUniqueEmails = function(emails) {
    const set = new Set()
    
    for (let email of emails) {
        const address = normalizeEmail(email)
        set.add(address)
    }
    
    return set.size
};

function normalizeEmail(email) {
    let [local, domain] = email.split("@");
    while(local.includes('.')){
        local = local.replace('.', "")
    }
    if(local.includes('+')){
        local = local.split('+')[0]
    }
    console.log(local)
    return local + "@" + domain
}
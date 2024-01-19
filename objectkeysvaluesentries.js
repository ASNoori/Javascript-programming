const Openinghours = {
    mon: {
        open:12,
        close:22
    },
    tue:{
        open:10,
        close:19
    }
}

const properties = Object.keys(Openinghours);
console.log(properties);
const values = Object.values(Openinghours);
console.log(values);

for(const [key,{open,close}] of Object.entries(Openinghours)){
    console.log(`${key} : Open time at ${open} and close time at ${close}`);
}
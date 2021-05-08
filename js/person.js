class Person{
    constructor(path){
        this.path=path;
        this.state = path.includes("president");
    }
    isPresident(){
        return this.state;
    }
    getPath(){
        return this.path;
    }
}
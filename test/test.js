// Γράψτε μια κλάση Rectangle με δύο χαρακτηριστικά width και height . H κλάση πρέπει
// να έχει μια μέθοδο area που επιστρέφει το εμβαδόν του παραλληλογράμμου. Παράδειγμα
// εξόδου:

class Rectangle {
    constractor(width,height){
        this.width= width,
        this.height= height;
    }
     area(){
        return this.width *this.height

    }
}
// Γράψτε μια κλάση Square που επεκτείνει τη Rectangle . H Square πρέπει να έχει μέθοδο
// constructor που λαμβάνει ένα όρισμα side και το αναθέτει και στα δύο χαρακτηριστικά
// width και height και να κληρονομεί τη μέθοδο area .

class Square extends Rectangle {
    constructor(width,height,side){
        super(width,height);
        this.side=side;
        console.log("side:",side)
    }

}
const sq = new Square(5,5,9)
sq.area()


const books = require("./books"); 



const processParameters = (argsByTerminal) => {
  const args = { 
    action: "",
    data: "",
  };
  if (argsByTerminal[0]) { 
    args.action = argsByTerminal[0];
  }
  if (argsByTerminal[1]) {
    args.data = argsByTerminal[1];
  } 
 

  return args ;
;
}

const actionsDelegated = ({ action, data }) => {
  
  if (action.length === 0) {
    const showBooks = books.getAll();
    console.log(showBooks);
  } else if (action === "--id" && data) {
    console.log(action);
    
    const id = parseInt(data, 10); 
    if (isNaN(id)) {
      console.log("El ID debe ser un número.");
    } else {
      const book = books.getById(id);
      if (book) {
        console.log(book);
      } else {
        console.log(`No se encontró un libro con el ID ${id}.`);
      }
    }
  } else if (action === "--tag" && data) {
    const booksByTag = books.getByTag(data);
    console.log(booksByTag);
  } else if (action === "--author" && data) {
    const booksByAuthor = books.getByAuthor(data);
    if (booksByAuthor.length === 0) {
      console.log( "Error, no book by that author was found")
    } else {
      console.log(booksByAuthor);
    }
  } else if (action === "--name" && data) {
    const booksByName = books.getByName(data);
    if(booksByName.length === 0) {
      console.log("Error: no book was found with that name")
    }
    console.log(booksByName);
  } else if (action === "--sold" && data) {
    const booksSoldByAuthor = books.getSoldByAuthor(data);
    if (booksSoldByAuthor.length === 0) {
      console.log( "Error, no book by that author was found")
    } else {
      console.log(booksSoldByAuthor);
    }
  } else {
    console.log("Error: unrecognized command");
  }
};

const main = () => {
  const params = process.argv.splice(2);
  const argsByTerminal = processParameters(params);
 
  if (argsByTerminal.data.includes("_")) {
    argsByTerminal.data = argsByTerminal.data.replaceAll("_", " ");
  }

  console.log(argsByTerminal);

  actionsDelegated(argsByTerminal);
};


main();

var dbSize = 5 * 1024 * 1024; // 5MB

var db = openDatabase("Loto", "", "Tirrage", dbSize, function() {
    console.log('db successfully opened or created');
});

db.transaction(function (tx) {
    tx.executeSql("CREATE TABLE IF NOT EXISTS Loto(ID INTEGER PRIMARY KEY ASC, Numero1 int, Numero2 int, Numero3 int, Numero4 int, Numero5 int, Numero6 int)",
        [], onSuccess, onError);
    tx.executeSql("INSERT INTO Tirrage(Numero1, Numero2, Numero3,Numero4, Numero5, Numero6 ) VALUES (?,?)", onSuccess, onError);
});

function onSuccess(transaction, resultSet) {
    console.log('Query completed: ' + JSON.stringify(resultSet));
}

function onError(transaction, error) {
    console.log('Query failed: ' + error.message);
}

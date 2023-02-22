tar -xvf "./assets/produtos/produtos.tar.gz" -C "./assets/db/"

mongorestore --maintainInsertionOrder --db "commerce" "./assets/db/produtos.bson"
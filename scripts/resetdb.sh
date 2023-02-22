rm -f "./assets/db/produtos.bson"
mongo commerce --quiet --eval 'db.dropDatabase()'

./scripts/create.sh

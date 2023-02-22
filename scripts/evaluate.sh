if [[ -z "$(command -v mongo)" ]]
then
  printf "You must have mongo installed in your machine"
fi

./scripts/"$1".sh

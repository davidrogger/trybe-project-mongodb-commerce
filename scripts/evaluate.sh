if test -z "$(command -v mongo)"; then
  printf "You must have mongo installed in your machine\n"
else
  ./scripts/"$1".sh
fi



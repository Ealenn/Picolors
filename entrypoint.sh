#!/bin/sh

if [ "$@" == "web" ]
then
	node ./web/app
else
	node ./cli/app $@
fi

#!/bin/bash
 
##############################################################
# Bash script to create database and populate it with our data 
##############################################################

# Variable Definitions
# Path to directory bash script is living
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

# Database Variable Definitions
DATABASE="goalcatcher"
# USER="ninad"   # Could assign a superuser and changed this value to that superuser

### Import Our Database ###
# Dont specify a database since CREATE DATABASE is in schema.sql
SCHEMA="$DIR/__db.sql"
psql postgres < $SCHEMA   # change to this if superuser defined psql -U $USER < $SCHEMA

### Import Our tbl file to seed Database ###
psql -d $DATABASE -q -c "copy teams from '$DIR/table_data/teams.tbl' with delimiter as '|' NULL '';"
psql -d $DATABASE -q -c "copy matches from '$DIR/table_data/matches.tbl' with delimiter as '|' NULL '';"
psql -d $DATABASE -q -c "copy locations from '$DIR/table_data/locations.tbl' with delimiter as '|' NULL '';"
psql -d $DATABASE -q -c "copy tournaments from '$DIR/table_data/tournaments.tbl' with delimiter as '|' NULL '';"
psql -d $DATABASE -q -c "copy plays from '$DIR/table_data/plays.tbl' with delimiter as '|' NULL '';"
psql -d $DATABASE -q -c "copy locates from '$DIR/table_data/locates.tbl' with delimiter as '|' NULL '';"
psql -d $DATABASE -q -c "copy participates from '$DIR/table_data/participates.tbl' with delimiter as '|' NULL '';"
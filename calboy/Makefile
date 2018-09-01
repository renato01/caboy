# run:
# 	FLASK_APP=feed:app FLASK_ENV=development flask run

# setup:
# 	@pip install -r requirements.txt

# test:
# 	@python -m unittest -v tests/*_test.py
run:
	FLASK_ENV=development python views.py runserver

run_db_init:
	FLASK_ENV=development python views.py db init

run_db_migrate:
	FLASK_ENV=development python views.py db migrate

run_db_upgrade:
	FLASK_ENV=development python views.py db upgrade
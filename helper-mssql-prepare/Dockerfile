FROM mcr.microsoft.com/mssql-tools

WORKDIR /app
COPY ./runme.sql runme.sql

CMD [ "/bin/bash -c 'printenv'"]
# until /opt/mssql-tools/bin/sqlcmd -S $DB_SERVER -U sa -P $DB_SA_PASSWORD -i runme.sql; do sleep 5; done'" ]
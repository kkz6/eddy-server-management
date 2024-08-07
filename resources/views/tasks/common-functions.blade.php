# Send a POST request to the given URL, ignoring the response and errors
function httpPostSilently()
{
    log_file="callback.log"

    if [ -z "${2:-}" ]; then
        (curl -X POST --silent --max-time 15 $1 -o /dev/null 2>>$log_file || true)
    else
        (curl -X POST --silent --max-time 15 $1 -H 'Content-Type: application/json' --data $2 -o /dev/null 2>>$log_file || true)
    fi
}

function httpPostRawSilently()
{
    log_file="callback.log"
    (curl -X POST --silent --max-time 15 $1 --data "$2" -o /dev/null 2>>$log_file || true)
}

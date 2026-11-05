from datetime import datetime, timezone


def info(message):
    timestamp = datetime.now(timezone.utc).isoformat(
        timespec="milliseconds"
    )
    timestamp = timestamp.replace("+00:00", "Z")

    with open("log.txt", "a", encoding="utf-8") as file:
        file.write(f"{timestamp} : {message}\n")
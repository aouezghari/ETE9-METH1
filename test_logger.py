import unittest
from datetime import datetime, timezone
from unittest.mock import mock_open, patch

import logger


class LoggerTests(unittest.TestCase):
    def test_info(self):
        mocked_file = mock_open()

        fixed_time = datetime(
            2026, 10, 23, 8, 17, 22,
            tzinfo=timezone.utc
        )

        with patch("logger.open", mocked_file):
            with patch("logger.datetime") as clock:
                clock.now.return_value = fixed_time
                logger.info("Bonjour")

        clock.now.assert_called_once_with(timezone.utc)

        mocked_file.assert_called_once_with(
            "log.txt", "a", encoding="utf-8"
        )
        mocked_file().write.assert_called_once_with(
            "2026-10-23T08:17:22.000Z : Bonjour\n"
        )


if __name__ == "__main__":
    unittest.main()
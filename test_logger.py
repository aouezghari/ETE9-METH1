import unittest
from unittest.mock import mock_open, patch

import logger


class LoggerTests(unittest.TestCase):
    def test_info(self):
        mocked_file = mock_open()

        with patch("logger.open", mocked_file):
            logger.info("Bonjour")

        mocked_file.assert_called_once_with(
            "log.txt", "a", encoding="utf-8"
        )
        mocked_file().write.assert_called_once_with(
            "Bonjour\n"
        )


if __name__ == "__main__":
    unittest.main()
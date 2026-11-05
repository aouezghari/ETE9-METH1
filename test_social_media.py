import json
import unittest
from unittest.mock import MagicMock, patch

import social_media


class SocialMediaTests(unittest.TestCase):
    def test_getPost(self):
        expected_post = {
            "userId": 1,
            "id": 100,
            "title": "Mon post de test",
            "body": "Un contenu arbitraire",
        }

        fake_response = MagicMock()
        fake_response.read.return_value = json.dumps(
            expected_post
        ).encode("utf-8")

        with patch(
            "social_media.urllib.request.urlopen"
        ) as mock_urlopen:
            mock_urlopen.return_value.__enter__.return_value = (
                fake_response
            )

            post = social_media.getPost(100)

        self.assertEqual(post, expected_post)

        mock_urlopen.assert_called_once_with(
            "https://jsonplaceholder.typicode.com/posts/100",
            timeout=10,
        )


if __name__ == "__main__":
    unittest.main()
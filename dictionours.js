const express = require('express');

const service = express();
// const array = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512];
const dict = {
  promise: {
    "definitions": [
      {
        "id": 1,
        "likes": 57,
        "definition": "what chad couldn't keep"
      },
      {
        "id": 0,
        "likes": 4,
        "definition": "A structure used to represent a pending computation."
      }
    ]
  },
  ashcat: {
    "definitions": [
      {
        "id": 0,
        "likes": 4,
        "definition": "Someone who shovels coal into the furnace of a steam engine."
      }
    ]
  },
  segfault: {
    "definitions": [
      {
        "id": 6,
        "likes": 3,
        "definition": "A catastrophic failure."
      }
    ]
  }
}

const port = 5000;
service.listen(port, () => {
  console.log(`We're live on port ${port}!`);
});

service.get('/words', (request, response) => {
    response.json({
        ok: true,
        result: Object.keys(dict).sort(),
      });
});

//textbook content
service.get('/:word', (request, response) => {
  const parsedWordParam = request.params.word;
  if (!dict.hasOwnProperty(parsedWordParam) ) {
    response.status(404);
    response.json({
      ok: false,
      result: `word does not exist ${parsedWordParam}`,
    });
  } else {
  response.json({
    ok: true,
    result: {...dict[parsedWordParam], word:parsedWordParam },
  });
}
});
const peoplesInfo = [
  { 
    "id" : "1",
    "info": {
        "f-Name": "Lisa",
        "l-Name": "Larsdater",
        "gender": "F"
    },
  }, 
  {
    "id" : "2",
    "info": {
      "f-name": "Hans",
      "l-Name": "Larsdater",
      "gender": "M"
    },
  },
  {
    "id" : "3",
    "info": {
      "f-name": "Lars",
      "l-Name": "Fjoer",
      "gender": "M"
    },
  }
];

export default function handler(req, res) {
  if (req.method === 'POST'){
    const data = req.body

    console.log(data)

    if (!data?.id){
      res.status(400)
      .json({ success: false, error: 'All data er ikke fylt ut!'})
    } else {
      peoplesInfo.push(data)

      res.status(201).json({ success: true, data: peoplesInfo})
    }
    
  } else if (req.method === 'PUT') {
    res.status(405).end()
  } else {
    res.status(200).json({ success: true, data: peoplesInfo})
  }
}
// res.status(200).json({ success: true, data: peoplesInfo})

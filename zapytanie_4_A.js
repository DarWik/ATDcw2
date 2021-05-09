printjson(db.people.aggregate(
{$group: {_id: "$nationality",
minbmi: {$min: {$divide: [{$convert: {input: "$weight", to: "double"}}, {$pow: [{$divide:[{$convert: {input: "$height", to: "double" }},100]},2]}]}},
avgbmi: {$avg: {$divide: [{$convert: {input: "$weight", to: "double"}}, {$pow: [{$divide:[{$convert: {input: "$height", to: "double" }},100]},2]}]}},
maxbmi: {$max: {$divide: [{$convert: {input: "$weight", to: "double"}}, {$pow: [{$divide:[{$convert: {input: "$height", to: "double" }},100]},2]}]}},}}))
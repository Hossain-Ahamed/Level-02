# MongoDB Native driver

```bash
show dbs # Show All Databases
db # Show Current Database
use database_name # Create Or Switch Database
db.dropDatabase() # Remove database
db.createCollection('posts') # Create Collection
show collections # Show Collections
```

- Install `- 5-1-A (windows) - 5-1-b (Mac & Linux)`

1. install mongodb shell
2. collect the path - C:\Program Files\MongoDB\Server\7.0\bin
3. Add to path in environment variable

- check version

```bash
mongod --version
```

- mongodb shell

```bash
mongod --version
```

# Insert Documents 5-2

```bash
db.posts.insertOne({
  title: 'Post One',
   ...............
   ..........
})
```

# Insert Multiple Documents

```bash
db.posts.insertMany([
  {
    title: 'Post Two',
    ...........
     ..........
    date: Date()
  },
  {
    ...........
    ..........
  }
])
```

# Get All Documents

```bash
db.posts.find()
```

# Get All Documents Formatted

```bash
db.posts.find().pretty()
```

# Find Documents

```bash
db.posts.find({ category: 'News' })
```

# Find One Document

```bash
db.posts.findOne({ category: 'News' })
```

# Find-Specific Fields

- Field Filtering

```bash
db.posts.findOne({ title: 'Post One' }, { title: 1,  author: 1 })

```

- project : Project can only be used for `find`, it does not work for `findOne`

```bash
db.getCollection("test")
.find({"age":17}).project({languages : 1})

```

# Operator

- Compression query Operator [Operator mongo](https://www.mongodb.com/docs/manual/reference/operator/query-comparison/ "Doc LINK")

  ```bash
  db.collection_name.find({ age: { $eq: 30 }}) # Equal to value
  db.collection_name.find({ age: { $ne: 30 }}) # Not Equal to value
  db.collection_name.find({ age: { $gt: 18 }}) # Greater than to value
  db.collection_name.find({ age: { $gte: 18 }}) # Greater than or Equal to value
  db.collection_name.find({ age: { $lt: 50 }}) # Less than to value
  db.collection_name.find({ age: { $lte: 50 }}) # less than or Equal to value

  # implicit and
  db.collection_name.find({ age: { $gte: 18, $lte: 30 }})
  db.collection_name.find({ age: { $in: [18 , 30 ] }})
  ```

## logical query Operator -`explicit and or`

- explicit and

  ```bash
  db.collection_name.find({ $and: [{ $ne: 30 }, { $gte: 18 }] })
  ```

- explicit or

```bash
  db.collection_name.find({ 
  $or: [
         { $ne: 30 },
         { $gte: 18 }
       ]
   })


  db.test.find({
      $or: [
          {interests : "Trvelling"},
          {interests : "Cooking"},

          ]
  }).project({
      interests : 1
  })
```

- or for array of object 5-5

```bash
 db.test.find({
    $or: [
        {"skills.name" : "JAVA"},
        {"skills.name" : "PYTHON"},
  
  
        ]
}).project({
    "skills" : 1
})
```

## element query Operator 5-6

- to find if the entity exist :

  ```bash
  db.collection_name.find({ name: { $exist: true } })
  ```

- to check the type of that entity

  ```bash
  db.collection_name.find({ age: { $type: "string" } })
  ```

- to find by size of array

```bash
db.test.find({friends:{$size: 0 }})
```

## Search from array **`interest :[1,3,5]`**

```bash
db.collection_name.find({interest : 4})
db.collection_name.find({interest :{$in[1,2,3]}})

  db.test.find({
      $or: [
          {interests : "Trvelling"},
          {interests : "Cooking"},

          ]
  }).project({
      interests : 1
  })
```

or, `$all` Search if the elements exist [it wont check the position]

```bash
  db.test.find({ interests: {$all : [ "Cooking" , "Travelling" ] }},{interests:1})
```

- Exactly match of array

```bash
db.test.find({ interests:[ "Cooking" , "Travelling" ] })
```

- Search in array by position

```bash
# db.test.find({"array_name.Position_No":"value"})
db.test.find({"interests.2":"Cooking"},{interests:1})
```

- `ELemmatch` - The $elemMatch operator matches documents that contain an array field with at least one element that matches all the specified query criteria.

  ```bash
  db.test.find({ 
      skills: {$elemMatch :{
          name : "JAVASCRIPT",
       level : "Intermidiate"
  }

  }},{skills:1})
  ```

# Sort Documents

```bash
# asc
db.posts.find().sort({ title: 1 }).pretty()
# desc
db.posts.find().sort({ title: -1 }).pretty()
```

# Count Documents

```bash
db.posts.find().count()
db.posts.find({ category: 'news' }).count()
```

# Limit Documents

```bash
db.posts.find().limit(2).pretty()
```

# Chaining

```bash
db.posts.find().limit(2).sort({ title: 1 }).pretty()
```

# Foreach

```bash
db.posts.find().forEach(function(doc) {
  print("Blog Post: " + doc.title)
})
```

# Update Document

```bash
db.posts.update({ title: 'Post Two' },
{
  title: 'Post Two',
  body: 'New body for post 2',
  date: Date()
},
{
  upsert: true
})
```

## Update Specific Field

```bash
db.posts.update({ title: 'Post Two' },
{
  $set: {
    body: 'Body for post 2',
    category: 'Technology',
    "address.city" : 'ngnj' , #update nested object
  }
})
```

## Array Update

### Add to array

- Add to set (make unique)

```bash
db.test.updateOne(
    {_id : ObjectId("6406ad63fc13ae5a40000065")},
    {
        $addToSet:{
           languages : "Bangal",
            # languages : ["c",'d"],  // add an extra array in an index
            # ie : "a","b", ["c",'d"],

            # languages :{$each : { ["c",'d"]}},  // add an extra array in an index
            # ie : "a","b", "c",'d",
        }
    }
})
```

- Using push (Good approach) - **Allow duplcate entry**

```bash
db.test.updateOne(
    {_id : ObjectId("6406ad63fc13ae5a40000065")},
    {
        $push:{
           languages : "English",  #each if multiple entry
        }
    }
})
```

### Remove an index

1. `pull` is used to remvoe by value
2. `pullAll` is used to remove for for multiple remove
3. `pop` is used to remove by index

```bash
db.test.updateOne(
    {_id : ObjectId("6406ad63fc13ae5a40000065")},
    {
        $pull:{ 
           languages : "Bangal",
        }
    }
})
```

## remove an field

using `unset`, A field can be removed from a document

```bash

db.test.updateOne(
    {_id : ObjectId("6406ad63fc13ae5a40000065")},
    {
        $unset:{
           hair : 1,
        }
    }
})
```

# Increment Field (\$inc)

```bash
db.posts.update({ title: 'Post Two' },
{
  $inc: {
    likes: 5
  }
})
```

# Rename Field name

Used to rename the field name in document

```bash
db.posts.update({ title: 'Post Two' },
{
  $rename: {
    likes: 'views'
  }
})
```

# Delete Document

```bash
db.posts.remove({ title: 'Post Four' })
```

```bash
db.posts.deleteOne({ title: 'Post Four' })
```

# Sub-Documents

```bash
db.posts.update({ title: 'Post One' },
{
  $set: {
    comments: [
      {
        body: 'Comment One',
        user: 'Mary Williams',
        date: Date()
      },
      {
        body: 'Comment Two',
        user: 'Harry White',
        date: Date()
      }
    ]
  }
})
```

# Find By Element in Array (\$elemMatch)

```bash
db.posts.find({
  comments: {
     $elemMatch: {
       user: 'Mary Williams'
       }
    }
  }
)
```

# Indexing

## Add Indexing  6-9
Create an index to search faster like _id in mongo

## Single field

```bash
db.posts.createIndex({ email: 1 })
```

## Text index 
```bash
db.posts.createIndex({ about: "text" })
```
-  Text Search

```bash
db.posts.find({
  $text: {
    $search: "\"Post O\""
    }
})
```

## Compound Index
 Cretae index depends on ascend or Descend by adding in index tab in mongo

## Delete  index :

```js
db.getCollection("massive-data").dropIndex({email : 1})
```



# MongoDB Aggregation Framework

## [Studio 3T Documentation](https://studio3t.com/knowledge-base/articles/mongodb-aggregation-framework/#mongodb-aggregate-pipeline-syntax)

```bash
# Aggregation pipeline
db.collection_name.aggregate(
    [
        { }, # stage 1
        { }, # stage 2
        { }, # stage 3
        { }, # ....
    ]
)
```

## `$match` - query the documents `6-1`

```js
      {
          $match: {
              gender: "Male",
              age: { $lt: 5 },
          }
      }
```

## `$project` - select the field which is show or not

```js
      {
          $project: {
                name: 1,
                age: 1,
                gender: 1
            }
      }
```

## `$addFields` - add new field to return document

```js
  {$addFields: {field: 'hello';}}
```

## `$out` - create new collection with the pipeline document fields

out creates a new collection with the output received by using the pipeline

```js
  {$out: 'test';}
```

```js
  db.test.aggregate([
    {$match: {gender : "Male", age : {$lt : 30}}},
   {$addFields: {course : "level-2"}},
   {$project: {course :1}}
   {$out : "test"}
    ])
```

## `$merge` - merger into existing collection

`$merge` updates the collection with the data received by the pipeline and the collection name must be existing collection name, so it can update

```js
  {
    $merge: 'test'; // value must be a existing collection name
  }
```

## `$group` - group by fields 6-3

`_id`  is the mendatory, the grouping will happened under this field

- group is used to group by the value under that field
- `_id` : null --> all will be considered as single group
- `$push` is for pushing the data to the array of object, it returns those data to every group accordingly
  1. `$$ROOT` -> returns all data
  2. `$field_name` => return that field data
- `$sum` => to sum up the count

```js
db.test.aggregate([
    {$group: {
        _id: "$address.country",
        count_v : {$sum : 1}, //accumulator => for count
        full_data_v : {$push : "$$ROOT"},  //accumulator => $$RROT return all data
        names_v : {$push : "$name"} // accumulator => return that field
  
    }},
    {
        $project : {
          "full_data_v.name" : 1,  // return the variables data
           names : "$names_v" // return the variable data with another variable
        }
    }
    ])
```

`$sum` can be used for sum any field value

```js
db.test.aggregate([
    {
        $group: {
            _id: "$gender",
            total_salary_v: { $sum: "$salary" },
            maxSalary: { $max: "$salary" },
            minSalary: { $min: "$salary" },
            avgSalary: { $avg: "$salary" },
        }
    },
    //stage -2
    {
        $project: {
            maxSalary: 1,
            minSalary: 1,
            "averageSalary": "$avgSalary",
            rangeBetweenMaxAndMin: { $subtract: ["$maxSalary", "$minSalary"] }
        }

    }
])
```

## `$unwind` - create separate fields from array 6-5

```js
 db.test.aggregate([
    { $unwind: "$friends" },
    { $group: { _id: "$friends" , sum : { $sum:1} }
    }
])
```

- show interest(ineterests is an array) by age group

```js
db.test.aggregate([
    //stage-1 -> make every document splitted by every interest
    { $unwind: "$interests" },
    //stage-2 -> group those doc by age
    {
        $group: {
            _id: "$age",
            interestPerAge: { $push: "$interests" }
        }
    }

])




// {
//  "_id" : 54,
//  "interestPerAge" : [ "Gardening", "Travelling", "Reading" ]
// },

// {
//  "_id" : 98,
//  "interestPerAge" : [ "Travelling", "Gaming", "Cooking" ]
// },
```

## `$bucket` - create group between the boundaries and return the docs in that boundary 6-6

```js
 db.test.aggregate([
    //stage -1 
    {
        $bucket: {
            groupBy: "$age", // which field are we trigeerring
            boundaries: [20, 40, 60, 80], // boundary : less than 20, 40,60,80
            default: "Greater than 80", // which doesnt follow the boundaries are in default
            output: { // how to see and what to see in output
                  count : {$sum : 1},
                  members : {$push : "$$ROOT"}
            }
        }
    },
    //stage -2  ==> 
    {
        $sort: {count : -1}
    },
    //stage -3 ==> project
    {
        $project : {count : 1}
    }

])
```

## `$sort` - sort documents

```js
  {
    $sort: {
      age: 1;
    }
  }
```

## `$limit` - limit doc

```js
  {
    $limit: 10;
  }
```

## `$facet` - use multiple pipelines parallelly 6-7

`$facet`  is used to simulate multi pipeline for same data to get multiple output at once for that data

```js
      db.collection_name.aggregate(
        [
            {
              $facet: {
                [
                  {}, //state 1
                  {}, //state 2
                  {}, // ......
                ], // pipeline 1
                [], // pipeline 2
                [], // pipeline 3
                [], // ....
              }
            }
        ]
    )
```

- Example :

```js
db.test.aggregate([
    {
        $facet: {
            //pipeline-1
            "FriendsCount": [
                //p-1 s-1
                { $unwind: "$friends" },
                //p-1 s-2
                {
                    $group: {
                        _id: "$friends", // friends dile $ na diye group wise separated hye sum hyto
                        count: { $sum: 1 }
                    }
                }
            ],
            //pipeline -2
            "Education count": [
                //p-2 s-1
                { $unwind: "$education" },
                //p-2 s-2
                {
                    $group: {
                        _id: "$education",
                        count: { $sum: 1 }
                    }
                }
            ],
          
            // pipeline-3
        }
    }


])
```

## `$lookup` - join two collection 6-8

```js
  db.orders.aggregate([
    {
        $lookup: {
               from: "test",  // target collection name
               localField: "userId",  // local field what need to join
               foreignField: "_id",// target field  of from collection
               as: "user_data_v" //variable name by which data will be shown
             }
    }
    ])
```

- Embedding Vs Referencing

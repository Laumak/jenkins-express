var supertest = require("supertest");
var expect = require("chai").expect;

var server = supertest.agent("http://localhost:4000");

describe("SAMPLE unit test", () => {

    // #1 should return home page
    it("should return home page", done => {
        server
            .get("/")
            .expect("Content-type",/text/)
            .expect(200)
            .end((err, res) => {
                expect(res.status).to.equal(200);
                
                done();
            });
    });

});

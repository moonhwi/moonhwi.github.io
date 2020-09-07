(function(e) {
    function t(t) {
        for (var n, i, c = t[0], r = t[1], u = t[2], d = 0, f = []; d < c.length; d++) i = c[d], Object.prototype.hasOwnProperty.call(s, i) && s[i] && f.push(s[i][0]), s[i] = 0;
        for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        l && l(t);
        while (f.length) f.shift()();
        return o.push.apply(o, u || []), a()
    }

    function a() {
        for (var e, t = 0; t < o.length; t++) {
            for (var a = o[t], n = !0, i = 1; i < a.length; i++) {
                var c = a[i];
                0 !== s[c] && (n = !1)
            }
            n && (o.splice(t--, 1), e = r(r.s = a[0]))
        }
        return e
    }
    var n = {},
        i = { app: 0 },
        s = { app: 0 },
        o = [];

    function c(e) { return r.p + "static/js/" + e + "." + { "chunk-09d2ba7e": "ebac4e6ddee432dee054", "chunk-0a25f00e": "e740a0ce6777b1617b64", "chunk-15b28f3e": "a663f1a214e4559cb293", "chunk-3f8ba3d1": "0719cba0ec0da4429f40", "chunk-03c1e51b": "3bbe8f56fddd0c149046", "chunk-064faaa6": "6dd64b84132a41d56b68", "chunk-0a0940d2": "0a0b0fc529f3677d4b94", "chunk-0f5c621f": "3c9bc8319da90b394307", "chunk-0f64398f": "73a336cc5788e4347924", "chunk-0fdbe22f": "f1f90622c5ec9f639652", "chunk-18614acc": "b9e4b8f0461e8df1a39f", "chunk-1865ea2a": "ad8078760341a2eddd20", "chunk-1ad4b1ee": "c57d98f8764ed8390601", "chunk-1e851f9b": "c6aa0f8d899b164391da", "chunk-1f7f9f18": "93457844c6df2c22f7d3", "chunk-1fea3aa2": "8b74eea5bdb3b2e9b404", "chunk-23d4be1a": "3fbc4ef2bcdb61f2c404", "chunk-298e757a": "cbca83f4b128033d5248", "chunk-2b9b6c99": "460c8c196f09ed9b5b67", "chunk-2b9bd79e": "811ebf9263dd4beb1d75", "chunk-2d0b6e7a": "4f2523b335e4d5b28a4c", "chunk-2d0b95da": "1d8e71739b491160b7f6", "chunk-2db1e0c5": "69d286ac31974fe05c35", "chunk-3b07edf3": "0f511ef58db56e7d3a40", "chunk-2f2ca2ce": "96052cbb3e92ce1a0fa2", "chunk-3195db68": "bafc73bfc973f784547f", "chunk-32b6e1e8": "9e968992e24d51e5011e", "chunk-332dfd9a": "c8b2eb60163065074495", "chunk-36210c95": "e1883127f703cdcbd7f3", "chunk-3a7e2760": "c7d5d86e790a31152a98", "chunk-3b1ce5d8": "80fb14b5f1c11b54c8fe", "chunk-3d9d0e28": "471e529f6021b8c65926", "chunk-3ec117f6": "fd62222a417e8df7e315", "chunk-46c92a3d": "42b5b6669dd84d8b5a74", "chunk-47957392": "40e01c90717cd0484efe", "chunk-47a04560": "e15e132522681b560745", "chunk-4888bb2e": "3d2ec986a17b572e5db5", "chunk-4a6d8cf0": "3018856a16426cda0e8d", "chunk-4ec92e32": "a0efd2e9194509387a93", "chunk-4fe55158": "8fb4e6368cf1a3e13997", "chunk-520a8c66": "09a296190c4a4f57211d", "chunk-5331590c": "c88881f4f65afdc9a744", "chunk-57e6a106": "0a75884981df7a1839ca", "chunk-582f4b2a": "dfff89319180eb916df4", "chunk-58f1df36": "58d91ef0457114084302", "chunk-5912e734": "ceee89e4a7792702a143", "chunk-59601310": "4ad8f3c0ae63fd932852", "chunk-01d0911a": "a3f13afaa6bef79aff3a", "chunk-cb66db4e": "e1606e685b108980d77a", "chunk-59b7ffc8": "bc7bd74807579e2ad47b", "chunk-5c8a8beb": "ca465900565865bdadf8", "chunk-5d2111d6": "1003c9732a7c25b81f68", "chunk-621d2e04": "1d8f3018b2ecc7a353e2", "chunk-6de5407c": "ee6e92dbec90dcad1fa9", "chunk-6ec46dc7": "d7ce2996633d08e50957", "chunk-73d0c6bf": "4d066a85e2e586522e78", "chunk-73fc9183": "b4be58bcdb601fff62c7", "chunk-035cce2a": "76021fb159b30df96be7", "chunk-052d0b21": "a1a01e01e8975c6e0d00", "chunk-06cfb6e6": "e4c9477a7aac52b43118", "chunk-08d235f6": "d15bc921033bf409cf20", "chunk-252e2bbc": "3a391fb66bb2be122127", "chunk-35ad88fb": "5aaf6132d5755b6cfde9", "chunk-43d43526": "e37c9ccdf0cfbad0c10b", "chunk-4565e728": "09f27ae399fc9ca148df", "chunk-5ee51fda": "8ddde9b416a99e93eef9", "chunk-bc23a286": "e9e12769aa22b434c3a2", "chunk-00e7c217": "204581030dd3df382086", "chunk-0539f2b0": "4226a4e6ab9c2ab599fa", "chunk-0edb760f": "815f40581cf1671e198b", "chunk-1317f1ff": "93191f71f0e54a7be789", "chunk-1ef3109e": "45c76c2538d2f3389452", "chunk-41950f4c": "bc3ac34e1d87b4f052a6", "chunk-4cf3bc9c": "aad250083d6b55128d4c", "chunk-4e414cd2": "36dfa66ace3ea6e4f80b", "chunk-6610d03b": "b650f35ce4108c561125", "chunk-7015abf2": "6753fcda53bc20a69958", "chunk-7ab6f87c": "ccfe4f22672aa122330b", "chunk-7c51bd7a": "61bbd5f2fc1779bad99b", "chunk-7ea494cd": "02972a277cbda681d6d6", "chunk-b18f495c": "e84ead4577ad5ab2115d", "chunk-c5b42314": "0f8aa00abb714b55b729", "chunk-da65b1c4": "a0a188b5e82de7c03309", "chunk-7575032e": "b4870c0ac1a0c9423da0", "chunk-785926d5": "08e6fe981ecbb16f0217", "chunk-795a3056": "631bbfb74eaa865ae28f", "chunk-7f923980": "d968e90b85870a494db2", "chunk-82f932e8": "23bb14a281883ff7527b", "chunk-8391942e": "e3151d114125e1ea138b", "chunk-85f1646a": "c2686ffcf33ea26d2887", "chunk-86854de4": "0a42609f53472e3d346a", "chunk-89ce40fe": "03331bc15865da60f4b7", "chunk-94d963e4": "0f1d79da56ae50124fd9", "chunk-9c8a29d2": "f2daba2e9b8ab8e7c25e", "chunk-9cec785e": "61fdf3d004fd54e511de", "chunk-a36a538e": "7663aede2e22cf47ee37", "chunk-ac762624": "cfe632bc8a476732c37c", "chunk-6b05f859": "a4debd6f910a29132378", "chunk-bed30930": "1677ab5a56701d2e0967", "chunk-cc8775f0": "63e9b45c2871923bc276", "chunk-cd91c9d4": "a9adb5ca96f646c60c1f", "chunk-d101f7ee": "2a94f934d4fe2cbf2fe9", "chunk-d2260cfa": "2999e01d57a72ef8cad0", "chunk-dde75352": "c29706aa502e4fb8d22f", "chunk-e9f20a10": "2ec708d90eae00a7728b", "chunk-388c8778": "e3edb026fc11a3f5085c", "chunk-483ecc60": "dc5796cd3622e9d5cd38", "chunk-9bb41ee0": "2d6c85fb81ae7ecd6a89", "chunk-f47f9924": "025760ae2d18cd087299", "chunk-f48fd4fa": "beab9e9ab91be33b2798", "chunk-f532982c": "c619fd3a610dd3882386", "chunk-4056395e": "638559ce7b7a6c823bd3", "chunk-724a8608": "78ce006bdaadd69585c0", "chunk-29630619": "14f4ab80d0f703ce89b4", "chunk-2c97b0ec": "344b168623731e382f32", "chunk-2c9cbf7d": "75607ca8303d7fcc2ab8", "chunk-2d229604": "843b750a656cd32c0f04", "chunk-08a43bb0": "ebde05d0d8a8d7cc7d4a", "chunk-0fd7ae10": "582f51d969b6780a64b8", "chunk-5425e230": "788c58ce4f76a280e9d2", "chunk-66d9c59d": "b6fb7780727d234d8e3a", "chunk-419ae960": "3a248518ea5f15cce4be", "chunk-42d3cef2": "8ead1dd656996150e9a8", "chunk-48cb0728": "0c7712efacc6917c8814", "chunk-4d92d5fe": "a64e1b085c5974379946", "chunk-51041bd2": "5e60cccfa2fc87891c6d", "chunk-5d637b9c": "6b7db5567b39cd0ca651", "chunk-6684c94e": "10f3c873d5cffa4bbcfc", "chunk-76dddb03": "1b03d179f74d733dc4f8", "chunk-776b50b1": "865c0898b051aba79024", "chunk-7b2d3c6c": "48424265afd45f92c2c9", "chunk-90b62210": "f61c375b2676e789b834", "chunk-917a1616": "6387fddb53133c71ae00", "chunk-d33ff21e": "ace5e12c2fc23df0ee1e", "chunk-daada084": "626c7b74b59671620b7a" }[e] + ".js?v=1599141970712" }

    function r(t) { if (n[t]) return n[t].exports; var a = n[t] = { i: t, l: !1, exports: {} }; return e[t].call(a.exports, a, a.exports, r), a.l = !0, a.exports }
    r.e = function(e) {
        var t = [],
            a = { "chunk-09d2ba7e": 1, "chunk-0a25f00e": 1, "chunk-3f8ba3d1": 1, "chunk-03c1e51b": 1, "chunk-064faaa6": 1, "chunk-0a0940d2": 1, "chunk-0f64398f": 1, "chunk-0fdbe22f": 1, "chunk-18614acc": 1, "chunk-1865ea2a": 1, "chunk-1ad4b1ee": 1, "chunk-1e851f9b": 1, "chunk-1f7f9f18": 1, "chunk-1fea3aa2": 1, "chunk-23d4be1a": 1, "chunk-298e757a": 1, "chunk-2b9b6c99": 1, "chunk-2b9bd79e": 1, "chunk-2db1e0c5": 1, "chunk-3b07edf3": 1, "chunk-2f2ca2ce": 1, "chunk-3195db68": 1, "chunk-32b6e1e8": 1, "chunk-332dfd9a": 1, "chunk-36210c95": 1, "chunk-3a7e2760": 1, "chunk-3b1ce5d8": 1, "chunk-3d9d0e28": 1, "chunk-3ec117f6": 1, "chunk-46c92a3d": 1, "chunk-47957392": 1, "chunk-47a04560": 1, "chunk-4888bb2e": 1, "chunk-4a6d8cf0": 1, "chunk-4ec92e32": 1, "chunk-4fe55158": 1, "chunk-5331590c": 1, "chunk-57e6a106": 1, "chunk-58f1df36": 1, "chunk-5912e734": 1, "chunk-59601310": 1, "chunk-01d0911a": 1, "chunk-cb66db4e": 1, "chunk-59b7ffc8": 1, "chunk-5c8a8beb": 1, "chunk-5d2111d6": 1, "chunk-621d2e04": 1, "chunk-6de5407c": 1, "chunk-6ec46dc7": 1, "chunk-73d0c6bf": 1, "chunk-035cce2a": 1, "chunk-052d0b21": 1, "chunk-06cfb6e6": 1, "chunk-08d235f6": 1, "chunk-252e2bbc": 1, "chunk-35ad88fb": 1, "chunk-43d43526": 1, "chunk-4565e728": 1, "chunk-5ee51fda": 1, "chunk-00e7c217": 1, "chunk-0539f2b0": 1, "chunk-0edb760f": 1, "chunk-1317f1ff": 1, "chunk-1ef3109e": 1, "chunk-41950f4c": 1, "chunk-4cf3bc9c": 1, "chunk-4e414cd2": 1, "chunk-6610d03b": 1, "chunk-7015abf2": 1, "chunk-7ab6f87c": 1, "chunk-7c51bd7a": 1, "chunk-7ea494cd": 1, "chunk-b18f495c": 1, "chunk-c5b42314": 1, "chunk-da65b1c4": 1, "chunk-7575032e": 1, "chunk-785926d5": 1, "chunk-795a3056": 1, "chunk-7f923980": 1, "chunk-82f932e8": 1, "chunk-8391942e": 1, "chunk-85f1646a": 1, "chunk-86854de4": 1, "chunk-89ce40fe": 1, "chunk-94d963e4": 1, "chunk-9c8a29d2": 1, "chunk-9cec785e": 1, "chunk-a36a538e": 1, "chunk-ac762624": 1, "chunk-6b05f859": 1, "chunk-bed30930": 1, "chunk-cc8775f0": 1, "chunk-cd91c9d4": 1, "chunk-d101f7ee": 1, "chunk-d2260cfa": 1, "chunk-dde75352": 1, "chunk-e9f20a10": 1, "chunk-388c8778": 1, "chunk-483ecc60": 1, "chunk-9bb41ee0": 1, "chunk-f47f9924": 1, "chunk-f48fd4fa": 1, "chunk-f532982c": 1, "chunk-4056395e": 1, "chunk-724a8608": 1, "chunk-29630619": 1, "chunk-2c97b0ec": 1, "chunk-2c9cbf7d": 1, "chunk-08a43bb0": 1, "chunk-0fd7ae10": 1, "chunk-5425e230": 1, "chunk-66d9c59d": 1, "chunk-419ae960": 1, "chunk-42d3cef2": 1, "chunk-48cb0728": 1, "chunk-4d92d5fe": 1, "chunk-51041bd2": 1, "chunk-5d637b9c": 1, "chunk-6684c94e": 1, "chunk-76dddb03": 1, "chunk-776b50b1": 1, "chunk-7b2d3c6c": 1, "chunk-90b62210": 1, "chunk-917a1616": 1, "chunk-d33ff21e": 1, "chunk-daada084": 1 };
        i[e] ? t.push(i[e]) : 0 !== i[e] && a[e] && t.push(i[e] = new Promise((function(t, a) {
            for (var n = "static/css/" + ({}[e] || e) + "." + { "chunk-09d2ba7e": "27c4cf134bb0e50b8f7f", "chunk-0a25f00e": "0b66d0fa2f41cebc626a", "chunk-15b28f3e": "31d6cfe0d16ae931b73c", "chunk-3f8ba3d1": "264e849f46a53417505c", "chunk-03c1e51b": "db1b34898675114ce5e2", "chunk-064faaa6": "881b17dbe39c140d524a", "chunk-0a0940d2": "8526232bc71d90213d7e", "chunk-0f5c621f": "31d6cfe0d16ae931b73c", "chunk-0f64398f": "382b1c0322194ce7668b", "chunk-0fdbe22f": "a7ada22f4f65b75f8cd3", "chunk-18614acc": "dea428748d282e9ec97b", "chunk-1865ea2a": "64814ead50955f39dd8c", "chunk-1ad4b1ee": "b1fc834d6f9b07627c3c", "chunk-1e851f9b": "48b462ead44396625abe", "chunk-1f7f9f18": "513948596c2d09b9e4a6", "chunk-1fea3aa2": "524e0cd2baebaacde44f", "chunk-23d4be1a": "b2e2a78ae8762c5adf8a", "chunk-298e757a": "1c19030ca4635c22d3ea", "chunk-2b9b6c99": "0dcc2fc8ef6c33907d78", "chunk-2b9bd79e": "0afa06e1e6e0d6a47144", "chunk-2d0b6e7a": "31d6cfe0d16ae931b73c", "chunk-2d0b95da": "31d6cfe0d16ae931b73c", "chunk-2db1e0c5": "580c3c79102819a8fe46", "chunk-3b07edf3": "239d1e6a7674f449d744", "chunk-2f2ca2ce": "d48030c6749f1c87ad2e", "chunk-3195db68": "eaba38b5e369a3562619", "chunk-32b6e1e8": "fb48138678728cf9c325", "chunk-332dfd9a": "13db882c0a90ed6d616d", "chunk-36210c95": "54bd16f05381e682d12c", "chunk-3a7e2760": "b6fa79be3f4e1383b425", "chunk-3b1ce5d8": "8eeff8da50490724ae1b", "chunk-3d9d0e28": "6dc5caa710f7685f0fc8", "chunk-3ec117f6": "659442aee53a5c45e1d8", "chunk-46c92a3d": "292f44d2f4c97e7f43b7", "chunk-47957392": "7d0a6055937900f96ee5", "chunk-47a04560": "6cafd402c0d2a5e2bbcd", "chunk-4888bb2e": "a2d344623fe7096621b7", "chunk-4a6d8cf0": "b2719a8d52f4cf3e05a5", "chunk-4ec92e32": "957229ba228bf4701ca2", "chunk-4fe55158": "878c49b19ae9500b6bd1", "chunk-520a8c66": "31d6cfe0d16ae931b73c", "chunk-5331590c": "18248e325eef15ae9bd4", "chunk-57e6a106": "eda1cfa39eeeca9b699b", "chunk-582f4b2a": "31d6cfe0d16ae931b73c", "chunk-58f1df36": "7e9ddb8c8b58091b3421", "chunk-5912e734": "31ba377eee42d0ad4d73", "chunk-59601310": "9c2ac32f0d9d0aecdb12", "chunk-01d0911a": "10d02cbd279905c9ff1e", "chunk-cb66db4e": "878c49b19ae9500b6bd1", "chunk-59b7ffc8": "ef99aaa4c91629e74d3c", "chunk-5c8a8beb": "ba0e0a123f6ecbf20ebb", "chunk-5d2111d6": "181c388c4744dae4065d", "chunk-621d2e04": "71a1c175f31cac796d1b", "chunk-6de5407c": "e54b0c2c46dd073641a1", "chunk-6ec46dc7": "5e188594aa276b5df2e3", "chunk-73d0c6bf": "77b76221e846831786d6", "chunk-73fc9183": "31d6cfe0d16ae931b73c", "chunk-035cce2a": "7f3a57398bc4b73e0a36", "chunk-052d0b21": "5feee3eae0b79bb10ab0", "chunk-06cfb6e6": "7f91fff5e56d88575029", "chunk-08d235f6": "ff0e3fb9259a2da02e41", "chunk-252e2bbc": "464cea55cc73e89036c6", "chunk-35ad88fb": "cd4c459cb1e647bffb93", "chunk-43d43526": "ef3ac86fccc181e2dc95", "chunk-4565e728": "acd74c045b02559fd293", "chunk-5ee51fda": "db64730d02b1397b3a67", "chunk-bc23a286": "31d6cfe0d16ae931b73c", "chunk-00e7c217": "7510df97b58f95dabeee", "chunk-0539f2b0": "3c0091c74bb107222e32", "chunk-0edb760f": "97c0438de71838b14d20", "chunk-1317f1ff": "3c0091c74bb107222e32", "chunk-1ef3109e": "fa3c943cdf8932c7e408", "chunk-41950f4c": "2b604b29a57ca1634bae", "chunk-4cf3bc9c": "cb3bb1695bee916ced3f", "chunk-4e414cd2": "b139a0ac4d15269e09a4", "chunk-6610d03b": "1bfaa7617d5617314420", "chunk-7015abf2": "d90733a5ce9632073faa", "chunk-7ab6f87c": "a36fead34e1038ce368f", "chunk-7c51bd7a": "5885978153abc0221e4e", "chunk-7ea494cd": "2ecdc668c5d870648f17", "chunk-b18f495c": "8adb41cd08b4552081ae", "chunk-c5b42314": "3c0091c74bb107222e32", "chunk-da65b1c4": "33144c2c7e4ac7c6c247", "chunk-7575032e": "d9e7f05d585046d80c10", "chunk-785926d5": "c9b6b471496a011d7111", "chunk-795a3056": "33bdd6a0d0ca28e04fe9", "chunk-7f923980": "c812dd3f37656f34bade", "chunk-82f932e8": "a3ebceb4f142a2d52e03", "chunk-8391942e": "c5dc6ea4f828243a3a71", "chunk-85f1646a": "493f0b266f675fdeb139", "chunk-86854de4": "e4c9d8708f7695795431", "chunk-89ce40fe": "ebca6011c2db4f54aa7f", "chunk-94d963e4": "aea082eb4edbfd84e87f", "chunk-9c8a29d2": "ef99aaa4c91629e74d3c", "chunk-9cec785e": "ae17f6bdbdb5fea84cab", "chunk-a36a538e": "78f8ccdcbd38538573b6", "chunk-ac762624": "8b3aab39440028e38d97", "chunk-6b05f859": "a67dd1a4abee9fd68797", "chunk-bed30930": "1af7e6942a8b6e02caeb", "chunk-cc8775f0": "48c38f8a95051d2bd60a", "chunk-cd91c9d4": "2efd165cf5aa8ef61692", "chunk-d101f7ee": "b5c328adcd6f0fe73dd8", "chunk-d2260cfa": "888a30bd95db98c2a3d3", "chunk-dde75352": "c9b6b471496a011d7111", "chunk-e9f20a10": "85ca87d53d92cd002604", "chunk-388c8778": "192538cd15fb5cb2e5c6", "chunk-483ecc60": "d4d19f73b8ae1a9608e3", "chunk-9bb41ee0": "527436198f6179c731d9", "chunk-f47f9924": "1dd94eb2c00ca0a7e747", "chunk-f48fd4fa": "d6fa9984485885ad5c45", "chunk-f532982c": "7b7583f2422d4d99809f", "chunk-4056395e": "114035568a0674134e3e", "chunk-724a8608": "98caa6de91f4985c981b", "chunk-29630619": "36b6f94fabd88e46f23e", "chunk-2c97b0ec": "4182f45a1613241fc19a", "chunk-2c9cbf7d": "342de24de83487d825e4", "chunk-2d229604": "31d6cfe0d16ae931b73c", "chunk-08a43bb0": "d2cd0712441938d17dfa", "chunk-0fd7ae10": "c5f8194cb49ca33d8d7a", "chunk-5425e230": "613388bd61ac815a5ef6", "chunk-66d9c59d": "cf20fb8e4e90a97d26cb", "chunk-419ae960": "d60f334f5708813abc6d", "chunk-42d3cef2": "65cc4ac8c85d9ccbcbe7", "chunk-48cb0728": "0b66d0fa2f41cebc626a", "chunk-4d92d5fe": "4330eb963452d9e6cc64", "chunk-51041bd2": "450defccf972eb49e940", "chunk-5d637b9c": "b577120a1cc99ce2087f", "chunk-6684c94e": "71faf276a0f6be7dd090", "chunk-76dddb03": "770589710efb142e258f", "chunk-776b50b1": "bb2ffbdfb94a2efd32ea", "chunk-7b2d3c6c": "1ddae845f1d02951c98d", "chunk-90b62210": "edda952897944d10b0c5", "chunk-917a1616": "368d4352abdb0334ae7b", "chunk-d33ff21e": "9fef09f357d6614f9583", "chunk-daada084": "7d32d99b647fb1b11e59" }[e] + ".css?v=1599141970712", s = r.p + n, o = document.getElementsByTagName("link"), c = 0; c < o.length; c++) {
                var u = o[c],
                    d = u.getAttribute("data-href") || u.getAttribute("href");
                if ("stylesheet" === u.rel && (d === n || d === s)) return t()
            }
            var f = document.getElementsByTagName("style");
            for (c = 0; c < f.length; c++) { u = f[c], d = u.getAttribute("data-href"); if (d === n || d === s) return t() }
            var l = document.createElement("link");
            l.rel = "stylesheet", l.type = "text/css", l.onload = t, l.onerror = function(t) {
                var n = t && t.target && t.target.src || s,
                    o = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
                o.code = "CSS_CHUNK_LOAD_FAILED", o.request = n, delete i[e], l.parentNode.removeChild(l), a(o)
            }, l.href = s;
            var h = document.getElementsByTagName("head")[0];
            h.appendChild(l)
        })).then((function() { i[e] = 0 })));
        var n = s[e];
        if (0 !== n)
            if (n) t.push(n[2]);
            else {
                var o = new Promise((function(t, a) { n = s[e] = [t, a] }));
                t.push(n[2] = o);
                var u, d = document.createElement("script");
                d.charset = "utf-8", d.timeout = 120, r.nc && d.setAttribute("nonce", r.nc), d.src = c(e);
                var f = new Error;
                u = function(t) {
                    d.onerror = d.onload = null, clearTimeout(l);
                    var a = s[e];
                    if (0 !== a) {
                        if (a) {
                            var n = t && ("load" === t.type ? "missing" : t.type),
                                i = t && t.target && t.target.src;
                            f.message = "Loading chunk " + e + " failed.\n(" + n + ": " + i + ")", f.name = "ChunkLoadError", f.type = n, f.request = i, a[1](f)
                        }
                        s[e] = void 0
                    }
                };
                var l = setTimeout((function() { u({ type: "timeout", target: d }) }), 12e4);
                d.onerror = d.onload = u, document.head.appendChild(d)
            }
        return Promise.all(t)
    }, r.m = e, r.c = n, r.d = function(e, t, a) { r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a }) }, r.r = function(e) { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, r.t = function(e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (r.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
            for (var n in e) r.d(a, n, function(t) { return e[t] }.bind(null, n));
        return a
    }, r.n = function(e) { var t = e && e.__esModule ? function() { return e["default"] } : function() { return e }; return r.d(t, "a", t), t }, r.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, r.p = "/v2/", r.oe = function(e) { throw console.error(e), e };
    var u = window["webpackJsonp"] = window["webpackJsonp"] || [],
        d = u.push.bind(u);
    u.push = t, u = u.slice();
    for (var f = 0; f < u.length; f++) t(u[f]);
    var l = d;
    o.push([0, "chunk-vendors"]), a()
})({
    0: function(e, t, a) { e.exports = a("56d7") },
    "0d0f": function(e, t, a) {},
    "138e": function(e, t, a) { a("e35a"), a("5e9f"), e.exports = [{ name: "登录", type: 1, pcPath: "/site/login", mobilePath: "/site/m_login" }, { name: "服务大厅", type: 1, pcPath: "/site/service", mobilePath: "/site/m_index" }, { name: "应用组", type: 1, pcPath: "/site/appGroup", mobilePath: "/site/m_appGroup" }, { name: "首页", type: 1, pcPath: "*", mobilePath: "/site/m_index" }, { name: "首页", type: 1, pcPath: "/site/index", mobilePath: "/site/m_index" }, { name: "个人信息", type: 1, pcPath: "/site/personal", mobilePath: "/site/m_personal" }, { name: "个人信息中心", type: 1, pcPath: "/site/upcPersonal", mobilePath: "/site/m_upcPersonal" }, { name: "个人中心", type: 2, pcPath: "/site/ucenter", mobilePath: "/site/m_message", changeFunc: function(e, t, a) { a.query.showroute && "infoCenter" != a.query.showroute || e.replace({ path: t, query: a.query }) } }, { name: "应用搜索", type: 1, pcPath: "/site/searchUse", mobilePath: "/site/m_searchUse" }, { name: "服务大厅", type: 1, pcPath: "/site/service", mobilePath: "/site/m_service" }, { name: "添加流程图", type: 1, pcPath: "/bpmn/addBpmn", mobilePath: "/from/m_addBpmn" }, { name: "编辑流程图", type: 2, pcPath: "/bpmn/editBpmn", mobilePath: "/bpmn/m_editBpmn", changeFunc: function(e, t, a) { "launch" == a.query.showRoute ? e.replace({ path: "/matter/index" == t ? "/matter/index" : "/matter/m_launch", query: a.query }) : e.replace({ path: "/matter/index" == t ? "/matter/index" : "/matter/m_index", query: a.query }) } }, { name: "服务详情", type: 1, pcPath: "/matter/detail", mobilePath: "/matter/m_detail" }, { name: "事项发起", type: 1, pcPath: "/matter/start", mobilePath: "/matter/m_start" }, { name: "分步发起", type: 1, pcPath: "/matter/startStep", mobilePath: "/matter/m_startStep" }, { name: "驳回分步", type: 1, pcPath: "/matter/rejectStep", mobilePath: "/matter/m_rejectStep" }, { name: "事项审批", type: 1, pcPath: "/matter/examine", mobilePath: "/matter/m_examine" }, { name: "我的事项", type: 2, pcPath: "/matter/index", mobilePath: "/matter/m_launch", changeFunc: function(e, t, a) { "launch" == a.query.page ? e.replace({ path: "/matter/index" == t ? "/matter/index" : "/matter/m_launch", query: a.query }) : e.replace({ path: "/matter/index" == t ? "/matter/index" : "/matter/m_index", query: a.query }) } }, { name: "我的事项", type: 1, pcPath: "/matter/index", mobilePath: "/matter/m_index" }, { name: "数据中心", type: 1, pcPath: "/report/index", mobilePath: "/report/m_index" }, { name: "报表详情", type: 1, pcPath: "/report/detail", mobilePath: "/report/m_detail" }] },
    "1d8b": function(e, t, a) {
        "use strict";
        a("ecb4");
        var n = { getApi: function(e) { var t = appConfig.apis[e]; return t ? t.indexOf("mock") < 0 ? appConfig.apiBaseUrl + t : t : "" } };
        t["a"] = n
    },
    "381c": function(e, t) { e.exports = { port: "8883", devApi: "test-workflow.campusapp.com.cn", onLineDomainName: "test.office.rlstech.cn", onlineDebug: !1, baseUrl: "", apiBaseUrl: "", staticUrl: "/static/", routeBasePath: "/v2/", uploadUrl: "https://dev-officeflowimg.rlstech.cn/", upImageUrl: "http://test.officeflowimg.rlstech.cn/", upFileUrl: "", uidKey: "vjuid", sourceV: (new Date).getTime(), apis: { frameToLogin: "/api/login/main", getSiteConfig: "/api/home/site-options", getAllAuth: "/site/user/auth", getUserName: "/site/user/get-name", uploadindex: "/api/upload/index" }, pcMobileChange: [], customConfig: { isToInfoCenter: !0, isToPdf: { default: 1 }, ucenterPath: { default: "site/personal" }, toPdfHttp: "https://", oldPrintPage: { margin: "20px" }, newPrintPage: { margin: "0" }, formLandscape: {} } } },
    4274: function(e, t, a) {},
    5557: function(e, t, a) {
        "use strict";
        var n = function(e) { this.config = { DbName: "BrowerDb", expires: 0 }, this.initDb(e) };
        n.prototype.initDb = function(e) {
            for (var t in e) this.config[t] = void 0 !== this.config[t] ? e[t] : this.config[t];
            this.config.DbTime = this.config.DbName + "_time"
        }, n.prototype.getKey = function(e) { return this.config.DbName + "_" + e }, n.prototype.setLItem = function(e, t, a) {
            if (this.clearOverData(), a = void 0 === a ? this.config.expires : a, this.removeLItem(e), a) {
                var n = null != localStorage.getItem(this.config.DbName) ? JSON.parse(localStorage.getItem(this.config.DbName)) : {},
                    i = null != localStorage.getItem(this.config.DbTime) ? JSON.parse(localStorage.getItem(this.config.DbTime)) : {};
                n[e] = t, i[e] = this.getSelfTime(a), localStorage.setItem(this.config.DbName, JSON.stringify(n)), localStorage.setItem(this.config.DbTime, JSON.stringify(i))
            } else localStorage.setItem(this.getKey(e), JSON.stringify(t))
        }, n.prototype.getLItem = function(e) {
            this.clearOverData();
            var t = null != localStorage.getItem(this.config.DbName) ? JSON.parse(localStorage.getItem(this.config.DbName)) : {},
                a = JSON.parse(localStorage.getItem(this.getKey(e)));
            return null !== a ? a : void 0 !== t[e] ? t[e] : null
        }, n.prototype.removeLItem = function(e) {
            this.clearOverData();
            var t = null != localStorage.getItem(this.config.DbName) ? JSON.parse(localStorage.getItem(this.config.DbName)) : {},
                a = null != localStorage.getItem(this.config.DbTime) ? JSON.parse(localStorage.getItem(this.config.DbTime)) : {},
                n = {},
                i = {};
            if (void 0 !== t[e]) {
                for (var s in t) e !== s && (n[s] = t[s], i[s] = a[s]);
                localStorage.setItem(this.config.DbName, JSON.stringify(n)), localStorage.setItem(this.config.DbTime, JSON.stringify(i))
            }
            localStorage.removeItem(this.getKey(e))
        }, n.prototype.clearLAll = function() { localStorage.removeItem(this.config.DbName), localStorage.removeItem(this.config.DbTime) }, n.prototype.clearOverData = function() {
            var e = null != localStorage.getItem(this.config.DbName) ? JSON.parse(localStorage.getItem(this.config.DbName)) : {},
                t = null != localStorage.getItem(this.config.DbTime) ? JSON.parse(localStorage.getItem(this.config.DbTime)) : {},
                a = this.getSelfTime(0),
                n = {},
                i = {};
            for (var s in t) t[s] > a && void 0 !== e[s] && (n[s] = e[s], i[s] = t[s]);
            localStorage.setItem(this.config.DbName, JSON.stringify(n)), localStorage.setItem(this.config.DbTime, JSON.stringify(i))
        }, n.prototype.getSelfTime = function(e) { var t = new Date; return t.setTime(t.getTime() + parseInt(e)), t.getTime() }, n.prototype.setSItem = function(e, t) { sessionStorage.setItem(this.getKey(e), JSON.stringify(t)) }, n.prototype.getSItem = function(e) { return JSON.parse(sessionStorage.getItem(this.getKey(e))) }, n.prototype.removeSItem = function(e) { sessionStorage.removeItem(this.getKey(e)) }, t["a"] = new n({ DbName: "officeDb", expires: 0 })
    },
    "56d7": function(e, t, a) {
        "use strict";
        a.r(t);
        a("a133"), a("ed0d"), a("f09c"), a("e117");
        var n = a("c0a4"),
            i = (a("ecb4"), a("77ad"), a("e793")),
            s = a("381c"),
            o = a("138e"),
            c = a("a4d9"),
            r = a("e425");
        if (s.port = location.port, s.domainName = location.hostname, s.baseUrl = location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : "") + s.routeBasePath, -1 !== location.href.indexOf("local.")) s.apiBaseUrl = "https://" + s.devApi;
        else {
            var u = s.onlineDebug && "test." == location.hostname.substr(0, 5) ? location.hostname.slice(5) : location.hostname,
                d = s.onlineDebug ? "https:" : location.protocol;
            s.apiBaseUrl = d + "//" + u + ("80" == location.port || "8883" == location.port ? "" : ":" + location.port)
        }
        s.upFileUrl = s.apiBaseUrl + "/site/attach?file=all/", s.uploadUrl = s.apiBaseUrl, s.staticUrl = s.baseUrl + "static/", s.apis = Object(i["a"])(Object(i["a"])({}, s.apis), r), s.pcMobileChange = o, c.customConfig = Object(i["a"])(Object(i["a"])({}, s.customConfig), c.customConfig), s = Object(i["a"])(Object(i["a"])({}, s), c), window.appConfig = s, n["default"].prototype.appConfig = s;
        var f = a("a336"),
            l = a.n(f),
            h = (a("26fe"), a("2984"), a("7c18")),
            p = a.n(h),
            m = (a("6eb9"), a("6389")),
            b = a.n(m),
            g = (a("569c"), a("43ae")),
            k = a.n(g),
            y = (a("294b"), a("a252")),
            v = a.n(y),
            L = (a("5806"), a("39ea")),
            w = a.n(L),
            S = (a("7b77"), a("3450")),
            j = a.n(S),
            I = (a("c973"), a("7af9")),
            C = a.n(I),
            P = (a("9907"), a("8d78")),
            N = a.n(P),
            _ = (a("567e"), a("2b3e")),
            T = a.n(_),
            x = (a("cc43"), a("855f")),
            D = a.n(x),
            A = (a("93fd"), a("60cf")),
            O = a.n(A),
            E = (a("e044"), a("dd58")),
            M = a.n(E),
            R = (a("4f55"), a("c944")),
            U = a.n(R),
            B = (a("d06c"), a("7763")),
            F = a.n(B),
            H = (a("6d09"), a("ee61")),
            K = a.n(H),
            q = (a("423c"), a("848f")),
            W = a.n(q),
            z = (a("b11c"), a("fce0")),
            G = a.n(z),
            J = (a("584b"), a("16a9")),
            V = a.n(J),
            Y = (a("2182"), a("d906")),
            X = a.n(Y),
            Q = (a("b806"), a("7810")),
            Z = a.n(Q),
            ee = (a("ca6c"), a("2c83")),
            te = a.n(ee),
            ae = (a("31d0"), a("60bf")),
            ne = a.n(ae),
            ie = (a("32de"), a("8d99")),
            se = a.n(ie),
            oe = (a("a68a"), a("230e")),
            ce = a.n(oe),
            re = (a("9102"), a("3aa8")),
            ue = a.n(re),
            de = (a("086f"), a("ce6c")),
            fe = a.n(de),
            le = (a("3c5e"), a("3a6a")),
            he = a.n(le),
            pe = (a("0e55"), a("7682")),
            me = a.n(pe),
            be = (a("357c"), a("32a0")),
            ge = a.n(be),
            ke = (a("008a"), a("020f")),
            ye = a.n(ke),
            ve = (a("f923"), a("7794")),
            Le = a.n(ve),
            we = (a("4c51"), a("e403")),
            Se = a.n(we),
            je = (a("cb5a"), a("cbc6")),
            Ie = a.n(je),
            Ce = (a("e8bd"), a("3f00")),
            Pe = a.n(Ce),
            Ne = (a("dc0a"), a("679e")),
            _e = a.n(Ne),
            Te = (a("4644"), a("7668")),
            xe = a.n(Te),
            De = (a("b764"), a("77bb")),
            Ae = a.n(De),
            Oe = (a("5bfb"), a("8fbc")),
            Ee = a.n(Oe),
            Me = (a("868f"), a("379c")),
            Re = a.n(Me),
            Ue = (a("e6e5"), a("2f19")),
            Be = a.n(Ue),
            Fe = (a("87cf"), a("b94c")),
            He = a.n(Fe),
            Ke = (a("9aa1"), a("a8e4")),
            qe = a.n(Ke),
            $e = (a("ca55"), a("3fbd")),
            We = a.n($e),
            ze = (a("608b"), a("d55c")),
            Ge = a.n(ze);
        n["default"].use(Ge.a), n["default"].use(We.a), n["default"].use(qe.a), n["default"].use(He.a), n["default"].use(Be.a), n["default"].use(Re.a), n["default"].use(Ee.a), n["default"].use(Ae.a), n["default"].use(xe.a), n["default"].use(_e.a), n["default"].use(Pe.a), n["default"].use(Ie.a), n["default"].use(Se.a), n["default"].use(Le.a), n["default"].use(ye.a), n["default"].use(ge.a), n["default"].use(me.a), n["default"].use(he.a), n["default"].use(fe.a), n["default"].use(ue.a), n["default"].use(ce.a), n["default"].use(se.a), n["default"].use(ne.a), n["default"].use(te.a), n["default"].use(Z.a), n["default"].use(X.a), n["default"].use(V.a), n["default"].use(G.a), n["default"].use(W.a), n["default"].use(K.a), n["default"].use(F.a), n["default"].use(U.a), n["default"].use(M.a), n["default"].use(O.a), n["default"].use(D.a), n["default"].use(T.a), n["default"].use(N.a), n["default"].use(C.a), n["default"].use(j.a), n["default"].use(w.a), n["default"].use(v.a), n["default"].use(k.a), n["default"].prototype.$MessageBox = b.a, n["default"].prototype.$message = p.a;
        var Je = a("3ddb"),
            Ve = a("255a"),
            Ye = a.n(Ve),
            Xe = a("4a42"),
            Qe = a.n(Xe),
            Ze = a("1ab3"),
            et = a.n(Ze),
            tt = { thirdpartyApplyBtn: "立即申请", serviceDepart: "服务部门", serviceOpenTiem: "起止时间", openingHoursText: "长期", taskSubmitBtn: "正式提交", xmlTab: "流程图", wxHotTit: "热门服务", rejectTips: "请立刻修改，重新提交", navPersonalEntry: "个人中心", mySubmit: "我的发起", myTask: "我的任务", noSubmit: "暂无数据", noTask: "暂无数据", noOversee: "暂无数据", noRead: "暂无数据", matterLog: "操作意见", thirdpartyBtnText: "查看表单", reportEmailExportText: "请输入邮箱地址", rejectText: "驳回", className: "服务分类", numberText: "学工号", infoQuery: "信息查询", nextNodeTitleText: "请设置下一个节点审批人或短信发送", m_startForm: "申请表单", loginSignUpText: "校外用户注册", loginpwdResetText: "校外用户忘记密码", loginSignUpPopText: "校外用户注册账户", sitePwdResetText: "校外用户密码找回" },
            at = { thirdpartyBtnText: "详细信息" };
        n["default"].use(Je["a"]);
        var nt = { en: Object(i["a"])(Object(i["a"])({}, Ye.a), {}, { system: Object(i["a"])(Object(i["a"])({}, tt), at) }), zh: Object(i["a"])(Object(i["a"])({}, Qe.a), {}, { system: Object(i["a"])(Object(i["a"])({}, tt), at) }) },
            it = new Je["a"]({ locale: "zh", messages: nt });
        et.a.i18n((function(e, t) { return it.t(e, t) }));
        var st = it,
            ot = (a("4274"), a("3698")),
            ct = (a("6128"), a("e8d2")),
            rt = {
                pieceConfig: { webIndexLink: { default: "/site/index", xidian: "/site/outlink?outlink=" + encodeURIComponent("http://ehall.xidian.edu.cn/new/index_xd.html#/home") }, webServiceLink: { default: "/site/service", xidian: "/site/outlink?outlink=" + encodeURIComponent("http://ehall.xidian.edu.cn/new/index_xd.html#/search") }, ncepuPersonalTit: { path: "/site/personal", ncepu: "教师综合信息查询系统" }, addSreviceShow: { default: !0, xidian: !1, cufe: !1, pku: !1 }, moveTips: { default: !1, cufe: !0 }, formitem: { default: { type: !0, id: [] }, ncepu: { type: !1, id: ["83", "97"] } }, showToPersonal: { default: !0, xidian: !1, nwu: !1, buaa: !1, pku: !1, uestc: !1, bnu: !1 }, setDate: { default: !1, cufe: !0, pku: !0 }, oucHide: { default: !0, ouc: !1 }, mobilePersonal: { default: !0, xidian: !1, fudan: !1, bjtu: !1 }, hideHeader: { default: !1, bjut: !0 }, redTag: { default: [], upc: [] }, documentTitle: { default: "", buaa: "网上办事大厅" }, messageCtrl: { default: "信息查询", upc: "信息管理" }, upcTiaoUrl: { default: !0, upc: !1 }, isToInfoCenter: { default: !0, buaa: !1, nwu: !1, pku: !1 }, showHandleNum: { default: !0, buaa: !1 }, leftModelSort: { default: [1, 2, 3], buaa: [3, 2, 1] }, rightModelSort: { default: [4, 5, 6], buaa: [6, 5, 4], ppsuc: [6, 5, 4] }, forgetPwd: { default: !1, nwu: "http://app.nwu.edu.cn/form/wap/default?formid=11" }, showHelper: { default: !1, upc: !0 }, isCcom: { default: !1, ccom: !0 }, upcHide: { default: [], upc: [392, 393, 394, 397, 398, 333] }, showSignAndAuth: { default: !0 }, showEntrust: { default: !1, dev: !0, pku: !0, test: !0 }, rejectOrReturn: { default: !1, pku: !0 }, webText: { default: { taskSubmitBtn: "正式提交", xmlTab: "流程图", wxHotTit: "热门服务", rejectTips: "请立刻修改，重新提交", navPersonalEntry: "个人中心", mySubmit: "我的发起", myTask: "我的任务", noSubmit: "暂无数据", noTask: "暂无数据", noOversee: "暂无数据", noRead: "暂无数据", serviceDepart: "服务部门", serviceOpenTiem: "起止时间", matterLog: "操作意见", thirdpartyBtnText: "查看表单", thirdpartyApplyBtn: "立即申请" }, pku: { taskSubmitBtn: "提交审批", xmlTab: "办事流程", rejectTips: "可修改后重新提交", mySubmit: "我的申请", myTask: "待办事项", noSubmit: "您还未提交过申请", noTask: "暂无待办事项", noOversee: "暂无督办的事项", noRead: "暂无知会的事项" }, ppsuc: { wxHotTit: "一张表建设专栏" }, buaa: { thirdpartyBtnText: "详细信息" }, ncepu: { serviceDepart: "业务归属部门", serviceOpenTiem: "事项开放时间" }, fudan: { matterLog: "操作", thirdpartyApplyBtn: "进入服务" }, upc: { xmlTab: "办理流程" } }, noDataSet: { default: !1, pku: !0 }, matterCustom: { default: { 264: !0 }, cufe: { 341: !0 } }, isToPdf: { default: { default: 1 }, test: { default: 2 }, cufe: { default: 2 }, pku: { default: 3 }, nwu: { default: 3 }, bupt: { default: 2 }, upc: { default: 1, 201: 2, 183: 4, 316: 4, 315: 2 }, ucas: { default: 2 }, bjut: { default: 2 }, cup: { default: 2 }, zhongxi: { default: 2 } }, isQuickDownload: { default: { default: !1 }, test: { default: !1, 1377: !0 } }, isShowPrint: { default: { default: !0 }, upc: { default: !0 }, test: { default: !0 } }, showPrinter: { default: !1, buaa: !0, test: !0, dev: !0 }, ispku: { default: !1, pku: !0, test: !1, dev: !1 }, hasSms: { default: !0 }, startExemCLosePage: { default: !1, xidian: !0 }, formLandscape: { default: {}, cufe: { 1106: "vertical", 1361: "vertical" } }, showStatistics: { default: !1, dev: !0, test: !0, cufe: !0 }, toOneTablePass: { default: "/site/personal", bupt: "http://me.bupt.edu.cn/page/backHome/index", ncepu: "http://me.ncepu.edu.cn/page/backHome/index", cup: "http://me.cup.edu.cn/page/backHome/index", ucas: "http://sep.ucas.ac.cn/portal/site/419/from/aHR0cHM6Ly9tZS51Y2FzLmFjLmNuL3BhZ2UvYmFja0hvbWUvaW5kZXg=", bift: "http://me.bift.edu.cn/page/backHome/index" }, isBupt: { default: !1, bupt: !0 }, isNcepu: { default: !1, ncepu: !0 }, isFudan: { default: !1, fudan: !0 }, hideBreadcrumb: { default: !1, fudan: !0 }, pkuSuggestion: { default: [], pku: [352] }, oucHideBtn: { default: !0, ouc: !1 }, hideLoadSelect: { default: [], pku: [348, 349, 350, 351, 352], ouc: [337, 347, 339, 343, 344] }, hideMobileBtn: { default: [], ouc: [337, 347], bjut: [333, 336, 337, 338] }, showLoadDrafSelect: { default: [], bjut: [333, 336, 337, 338] }, hideTransient: { default: [], pku: [348, 349, 350, 351, 352] }, leaveCountryId: { default: [], pku: [370, 372] }, awayFixed: { default: [], pku: [348, 349, 350, 351, 352] }, hideBtns: { default: { app_id: [] }, pku: { app_id: [352] } }, pkuDaichuli: { default: [], pku: [364, 383] }, oldPrintPage: { default: { margin: "20px" }, upc: { margin: "15mm 10mm" }, bupt: { margin: "30mm 20mm 20mm 20mm" } }, newPrintPage: { default: { margin: "0" }, upc: { margin: "15mm 10mm" }, bupt: { margin: "30mm 20mm 20mm 20mm" } }, showLookForm: { default: !1, tsinghua: !0, test: !0 }, forbiddenAutoSave: { default: !1, ncepu: [67] }, isnacta: { default: !1, nacta: !0 }, hideBpmnTab: { default: [], upc: ["334", "335", "336", "337", "338", "339", "340", "341", "342", "343", "344", "345", "346", "347", "348"] }, toPdfhttp: { default: !1, ucas: !0, nwu: !0, bjut: !0, cup: !0 }, className: { default: "服务分类", ucas: "归属部门" }, statement: { default: "请输入邮箱地址", ouc: "请输入邮箱地址(仅可导出到校内邮箱)" }, requiredType: { default: 0, upc: 1 }, threeReportHeaber: { default: { 54: "测试2" }, uir: { 5: "Calendar_42", 4: "Calendar_42", 3: "Calendar_42", 2: "Calendar_42" } }, serviceDetailtext: { default: "不可重复申请", buaa: { 948: "该事项只能发起一次。The application can only be submitted once. Your have already submitted.", 946: "该事项只能发起一次。The application can only be submitted once. Your have already submitted." } }, countersigntext: { default: { default: { btnText: "加签", already: "已加签", people: "加签人员", successAlert: "成功加签", tagText: "的加签", examineAlert: "加签完成", receiptText: "加签回执", finishText: "已加签" } }, ppsuc: { default: { btnText: "加签", already: "已加签", people: "加签人员", successAlert: "成功加签", tagText: "的加签", examineAlert: "加签完成", receiptText: "加签回执", finishText: "已加签" }, 392: { btnText: "转经办人", already: "已转经办人", people: "转经办人员", successAlert: "转经办人成功", tagText: "的转经办人", examineAlert: "转经办人办理完成", receiptText: "转经办人回执", finishText: "已转经办人" } } }, isUestc: { default: !1, uestc: !0 }, pcServiceHide: { default: [], ccom: [413] }, dInputLinkText: { default: !1, cufe: !0, fudan: !0 } },
                getConfigLevel: function(e, t) { return void 0 !== !this.pieceConfig[e] && (this.pieceConfig[e] && void 0 !== this.pieceConfig[e][ct["a"].getWebId()] ? void 0 !== this.pieceConfig[e][ct["a"].getWebId()][t] ? this.pieceConfig[e][ct["a"].getWebId()][t] : this.pieceConfig[e][ct["a"].getWebId()]["default"] : this.pieceConfig[e]["default"]["default"]) },
                getConfig: function(e) { return void 0 !== !this.pieceConfig[e] && (void 0 !== this.pieceConfig[e][ct["a"].getWebId()] ? this.pieceConfig[e][ct["a"].getWebId()] : this.pieceConfig[e]["default"]) },
                setTitle: function(e, t) {
                    if (void 0 === !this.pieceConfig[e]) return !1;
                    void 0 != this.pieceConfig[e][ct["a"].getWebId()] && this.pieceConfig[e]["path"] == t && (document.title = this.pieceConfig[e][ct["a"].getWebId()])
                },
                getformitem: function(e, t) {
                    if (void 0 === !this.pieceConfig[e]) return !0;
                    if ("" == t) return !0;
                    var a = ct["a"].getWebId(),
                        n = "";
                    return n = void 0 != this.pieceConfig[e][a] && void 0 != this.pieceConfig[e][a].id && "" != this.pieceConfig[e][a].id && -1 != this.pieceConfig[e][a].id.indexOf(t) ? this.pieceConfig[e][a].type : this.pieceConfig[e]["default"].type, n
                },
                getTextConfig: function(e, t, a) {
                    if (void 0 === !this.pieceConfig[e]) return !1;
                    var n = ct["a"].getWebId(),
                        i = "";
                    return i = void 0 != this.pieceConfig[e][n] && void 0 != this.pieceConfig[e][n][t] ? this.pieceConfig[e][n][t] : this.pieceConfig[e]["default"][t], i
                },
                getDetailtest: function(e, t) {
                    if (void 0 === !this.pieceConfig[e]) return !1;
                    var a = ct["a"].getWebId(),
                        n = "";
                    return n = void 0 != this.pieceConfig[e][a] && void 0 != this.pieceConfig[e][a][t] ? this.pieceConfig[e][a][t] : this.pieceConfig[e]["default"], n
                }
            };
        n["default"].prototype.pieceHelper = rt;
        a("9403"), a("fe59"), a("e35a"), a("5e9f"), a("08ba"), a("b4fb"), a("4194"), a("0d7a");
        var ut = a("5748"),
            dt = a("3211"),
            ft = a("897d"),
            lt = a.n(ft);
        a("6266");
        n["default"].use(dt["a"]);
        var ht = n["default"].prototype.appConfig,
            pt = function(e) { this.Router = null, this.template = e.template ? e.template : null, this.cssInfo = e.cssInfo ? e.cssInfo : null, this.publicCss = e.publicCss ? e.publicCss : [], this.styleCss = e.styleCss ? e.styleCss : {}, this.publicJs = e.publicJs ? e.publicJs : [], this.needLogins = e.needLogins ? e.needLogins : [], this.notneedLogins = e.notneedLogins ? e.notneedLogins : [], this.scrollConfig = e.scrollConfig ? e.scrollConfig : null, this.ctype = "" };
        pt.prototype.checkConfig = function() { return !(!this.template || !this.checkTemplate()) || (console.error("template 模板配置错误！"), !1) }, pt.prototype.checkTemplate = function() {
            var e = 0;
            for (var t in this.template) {
                var a = this.template[t];
                for (var n in a) {
                    var i = a[n];
                    if (!i.comLoad || "function" != typeof i.comLoad) return console.error(t + "模块， " + n + "页面，comLoad函数设置错误！"), !1;
                    if (!i.metaInfo || !i.metaInfo.title) return console.error(t + "模块， " + n + "页面，metainfo设置错误！"), !1;
                    e++
                }
            }
            return !!e || (console.error("最少应该有一个页面！"), !1)
        }, pt.prototype.getBaseRouter = function(e) {
            if (this.Router) return this.Router;
            this.Router = new dt["a"]({ mode: "history", routes: e, base: ht.routeBasePath, scrollBehavior: function(e, t, a) { return { x: 0, y: 0 } } });
            var t = this;
            return this.Router.afterEach((function(e) { t.progressEnd(), ht.onlyClient() && t.checkClientSize(e) })), this.loadMetaInfo(this.Router), this.loadOtherSource(this.Router), this.Router
        }, pt.prototype.checkClientSize = function(e) {
            var t = e.matched && e.matched.length && e.matched[0],
                a = -1 !== t.path.indexOf("m_");

            function n() {
                var e = document.documentElement.clientWidth,
                    t = 320,
                    n = 640,
                    i = 760;
                a ? (e < t || e > n) && !0 : e < i && !0, $("#check_client_size").remove()
            }
            n(), window.addEventListener("resize", n, !1)
        }, pt.prototype.loadRouter = function() {
            if (!this.checkConfig()) return !1;
            var e = [],
                t = this.template,
                a = null;
            for (var n in t) {
                var s = t[n];
                for (var o in s) {
                    var c = { name: o, path: "/" + n + "/" + o, component: s[o]["comLoad"], meta: s[o]["metaInfo"] };
                    e.push(c)
                }
            }
            return a = Object(i["a"])(Object(i["a"])({}, {}), e[0]), a.path = "*", e.push(a), this.getBaseRouter(e)
        }, pt.prototype.getRequire = function(e) { return function(t, a) { return e("./" + t, a) } }, pt.prototype.loadMetaInfo = function(e) {
            var t = this;
            e.beforeEach((function(e, a, n) { t.progressStart(), e.meta.title && commonHelper.getDocumentTitle(e.meta.title, e.path), e.meta.desc && (document.desc = e.meta.desc), n() }))
        }, pt.prototype.sourceArrs = {}, pt.prototype.loadAllNum = 0, pt.prototype.sourceCallBack = null, pt.prototype.loadOtherSource = function(e) {
            var t = this;
            e.beforeEach((function(a, n, i) {
                t.clearSource();
                var s = "*" == a.matched[0].path ? e.options.routes[0].path : a.path;
                if (s = s.split("/"), s = [s[1], s[2]], !t.template[s[0]] || !t.template[s[0]][s[1]]) return i(), !1;
                var o = t.publicCss ? t.publicCss : [],
                    c = t.publicJs ? t.publicJs : [],
                    r = t.template[s[0]][s[1]].css ? t.template[s[0]][s[1]].css : [],
                    u = t.template[s[0]][s[1]].js ? t.template[s[0]][s[1]].js : [],
                    d = { css: [].concat(Object(ut["a"])(o), Object(ut["a"])(t.getStyleCss(a.path)), Object(ut["a"])(r)), js: [].concat(Object(ut["a"])(c), Object(ut["a"])(u)) };
                d.css.length || d.js.length ? (t.sourceArrs = d, t.registerSource(a, i)) : i()
            }))
        }, pt.prototype.getStyleCss = function(e) {
            var t = this.styleCss;
            if (!t.path || !t.baseName.length) return [];
            var a = [],
                n = commonHelper.getClientType(e) ? "m." : "",
                i = commonHelper.getClientType(e) ? "mstyle" : "style";
            return t.baseName.forEach((function(e) { a.push(t.path + n + commonHelper.getWebStyle(i) + "." + e) })), a
        }, pt.prototype.getClientClass = function(e) { return commonHelper.getClientType(e) ? "mobile" : "pc" }, pt.prototype.registerSource = function(e, t) {
            this.sourceCallBack = t;
            var a = this.getClientClass(e.path);
            this.ctype = a, this.loadCssSource(a), this.loadJsSource(a)
        }, pt.prototype.clearSource = function() { this.sourceArrs = [], this.loadAllNum = 0, this.sourceCallBack = null }, pt.prototype.loadCssSource = function(e) {
            var t = this;
            this.sourceArrs.css.forEach((function(a) {
                var n = ht.staticUrl + a,
                    i = lt()(n);
                if (t.loadAllNum++, $('[data-id="' + i + '"]').length) setTimeout((function() { t.loadSourceSuccess(e) }), 200);
                else {
                    var s = '<link data-id="' + i + '" data-type="' + e + '" href="' + n + "?v=" + ht.sourceV + '" rel="stylesheet" type="text/css"/>';
                    $("head").append(s), console.log($('[data-id="' + i + '"]'), e), $('[data-id="' + i + '"]').on("load", (function() { t.loadSourceSuccess(e) }))
                }
            }))
        }, pt.prototype.loadJsSource = function(e) {
            var t = this;
            this.sourceArrs.js.forEach((function(a) {
                var n = ht.staticUrl + a,
                    i = lt()(n);
                if (t.loadAllNum++, $('[data-id="' + i + '"]').length) setTimeout((function() { t.loadSourceSuccess(e) }), 200);
                else {
                    var s = document.createElement("script");
                    s.src = n + "?v=" + ht.sourceV, s.setAttribute("data-id", i), s.setAttribute("data-type", e), s.type = "text/javascript", s.async = !1, s.setAttribute("data-path", a), s.onload = function() { t.loadSourceSuccess(e) }, document.getElementsByTagName("body")[0].appendChild(s)
                }
            }))
        }, pt.prototype.loadSourceSuccess = function(e) { this.loadAllNum--, this.loadAllNum || this.sourceCallBack() }, pt.prototype.beforeEnterModule = function(e) {}, pt.prototype.progressSelector = "progress_loading", pt.prototype.progressStart = function() {
            if (!$("#" + this.progressSelector).length) {
                var e = '<div id="' + this.progressSelector + '"><div></div></div>';
                $("body").append(e)
            }
            this.clearProgress(), window.location.hash && -1 !== window.location.hash.indexOf("module_") || $("#" + this.progressSelector).show(), this.progressNum = 0, this.progressChange(98, 3e3)
        }, pt.prototype.progressEnd = function() { $(".frame-loader").length && $(".frame-loader").remove(), this.progressChange(100, 300) }, pt.prototype.progressClearBar = null, pt.prototype.progressNum = 0, pt.prototype.progressChange = function(e, t) {
            var a = 20,
                n = (e - this.progressNum) / (t / a),
                i = this;
            clearInterval(i.progressClearBar), i.progressClearBar = setInterval((function() {
                if ($("#" + i.progressSelector).find("div").width(i.progressNum + "%"), i.progressNum >= e) return clearInterval(i.progressClearBar), i.progressNum >= 100 && ($("#" + i.progressSelector).hide(), i.clearProgress()), !1;
                i.progressNum += n
            }), a)
        }, pt.prototype.clearProgress = function() { $("#" + this.progressSelector).find("div").width("0%") };
        var mt = pt,
            bt = a("e644"),
            gt = a("6367"),
            kt = {
                template: {
                    site: {
                        index: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-86854de4")]).then(function() {
                                    var t = [a("0de5")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "首页", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        login: {
                            comLoad: function(e) {
                                a.e("chunk-48cb0728").then(function() {
                                    var t = [a("9343")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "登录", notNeedLogin: !0, auth: "" },
                            css: [],
                            js: []
                        },
                        m_login: {
                            comLoad: function(e) {
                                a.e("chunk-419ae960").then(function() {
                                    var t = [a("57ec")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "登录", notNeedLogin: !0, auth: "" },
                            css: [],
                            js: []
                        },
                        m_signUp: {
                            comLoad: function(e) {
                                a.e("chunk-daada084").then(function() {
                                    var t = [a("19d7")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "注册", notNeedLogin: !0, auth: "" },
                            css: [],
                            js: []
                        },
                        pwdReset: {
                            comLoad: function(e) {
                                a.e("chunk-90b62210").then(function() {
                                    var t = [a("00d4")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "密码找回", notNeedLogin: !0, auth: "" },
                            css: [],
                            js: []
                        },
                        search: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-73fc9183"), a.e("chunk-5ee51fda")]).then(function() {
                                    var t = [a("634d")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "应用搜索", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        printmessage: {
                            comLoad: function(e) {
                                a.e("chunk-29630619").then(function() {
                                    var t = [a("fb2e")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "提示", notNeedLogin: !0, auth: "" },
                            css: [],
                            js: []
                        },
                        outlink: {
                            comLoad: function(e) {
                                a.e("chunk-2d229604").then(function() {
                                    var t = [a("dcd3")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "第三方跳转", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        scan_qrcode: {
                            comLoad: function(e) {
                                a.e("chunk-0a25f00e").then(function() {
                                    var t = [a("74a3")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "确认", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        m_scan_qrcode: {
                            comLoad: function(e) {
                                a.e("chunk-776b50b1").then(function() {
                                    var t = [a("57b3")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "扫码验证", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        service: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-73fc9183"), a.e("chunk-035cce2a")]).then(function() {
                                    var t = [a("8a07")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "服务大厅", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        ucenter: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-47957392")]).then(function() {
                                    var t = [a("fca8")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "个人中心", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        upcPersonal: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-8391942e")]).then(function() {
                                    var t = [a("cf4b")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "个人信息中心", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        personal: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-47a04560")]).then(function() {
                                    var t = [a("f778")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "个人信息中心", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        m_index: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-2db1e0c5"), a.e("chunk-5425e230")]).then(function() {
                                    var t = [a("9764")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "首页", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        m_search: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-298e757a")]).then(function() {
                                    var t = [a("14e0")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "搜索", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        m_upcPersonal: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-621d2e04")]).then(function() {
                                    var t = [a("0a68")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "个人信息中心", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        m_personal: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-bed30930")]).then(function() {
                                    var t = [a("4ddc")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "个人信息中心", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        m_addapp: {
                            comLoad: function(e) {
                                a.e("chunk-5d637b9c").then(function() {
                                    var t = [a("c1e4c")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "添加应用", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        m_message: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-3b1ce5d8")]).then(function() {
                                    var t = [a("510d")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "信息中心", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        m_upcChangeInfo: {
                            comLoad: function(e) {
                                a.e("chunk-917a1616").then(function() {
                                    var t = [a("acbb")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "个人中心", notNeedLogin: !1, auth: "" },
                            css: ["css/wx/magic-check.min.css"],
                            js: ["js/wx/mobiscroll_date.js", "js/wx/mobiscroll.js"]
                        },
                        m_changeInfo: {
                            comLoad: function(e) {
                                a.e("chunk-42d3cef2").then(function() {
                                    var t = [a("054e")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "个人中心", notNeedLogin: !1, auth: "" },
                            css: ["css/wx/magic-check.min.css"],
                            js: ["js/wx/mobiscroll_date.js", "js/wx/mobiscroll.js"]
                        },
                        m_pwdReset: {
                            comLoad: function(e) {
                                a.e("chunk-51041bd2").then(function() {
                                    var t = [a("7dd3")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "重置密码", notNeedLogin: !0, auth: "" },
                            css: [],
                            js: []
                        },
                        m_forceResetpwd: {
                            comLoad: function(e) {
                                a.e("chunk-7b2d3c6c").then(function() {
                                    var t = [a("e345")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "设置密码", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        m_followEnterprise: {
                            comLoad: function(e) {
                                a.e("chunk-09d2ba7e").then(function() {
                                    var t = [a("b2ff")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "关注企业号", notNeedLogin: !0, auth: "" },
                            css: [],
                            js: []
                        },
                        appGroup: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-94d963e4")]).then(function() {
                                    var t = [a("4d80")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "应用组", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        m_appGroup: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-36210c95")]).then(function() {
                                    var t = [a("279a")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "应用组", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: ["js/wx/jweixin-1.3.2.js"]
                        },
                        m_downCenter: {
                            comLoad: function(e) {
                                a.e("chunk-2c9cbf7d").then(function() {
                                    var t = [a("2446")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "下载中心", notNeedLogin: !0, auth: "" },
                            css: [],
                            js: []
                        },
                        m_downloadSearch: {
                            comLoad: function(e) {
                                a.e("chunk-2c97b0ec").then(function() {
                                    var t = [a("77c0")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "搜索", notNeedLogin: !0, auth: "" },
                            css: [],
                            js: []
                        },
                        m_userIdentity: {
                            comLoad: function(e) {
                                a.e("chunk-d33ff21e").then(function() {
                                    var t = [a("20a8")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "选择身份", notNeedLogin: !0, auth: "" },
                            css: [],
                            js: []
                        },
                        searchUse: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-73fc9183"), a.e("chunk-5ee51fda")]).then(function() {
                                    var t = [a("634d")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "应用搜索", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        m_searchUse: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-2db1e0c5"), a.e("chunk-66d9c59d")]).then(function() {
                                    var t = [a("c4ac")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "应用搜索", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        m_service: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-2db1e0c5"), a.e("chunk-08a43bb0")]).then(function() {
                                    var t = [a("d2de")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "服务大厅", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        m_schoolhealth: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-4056395e")]).then(function() {
                                    var t = [a("fc95")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "校园健康卡", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        }
                    },
                    form: {
                        editform: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-73fc9183"), a.e("chunk-bc23a286"), a.e("chunk-4cf3bc9c")]).then(function() {
                                    var t = [a("af06")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "编辑表格", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        formpreview: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-73fc9183"), a.e("chunk-bc23a286"), a.e("chunk-6610d03b")]).then(function() {
                                    var t = [a("e143")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "表单预览", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        printPreviewPDF: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-73fc9183"), a.e("chunk-bc23a286"), a.e("chunk-c5b42314")]).then(function() {
                                    var t = [a("be3d")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "打印预览", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        m_formpreview: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-73fc9183"), a.e("chunk-bc23a286"), a.e("chunk-da65b1c4")]).then(function() {
                                    var t = [a("6bdd")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "手机预览", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        }
                    },
                    process: {
                        edit: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-59601310"), a.e("chunk-01d0911a")]).then(function() {
                                    var t = [a("2194")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "编辑流程", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        }
                    },
                    matter: {
                        classifyInfo: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-59b7ffc8")]).then(function() {
                                    var t = [a("0f00")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "分类管理", notNeedLogin: !1, auth: "AppClassifyManage" },
                            css: [],
                            js: []
                        },
                        classifyInfoDetail: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-9c8a29d2")]).then(function() {
                                    var t = [a("e5d2")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "分类详情", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        appGroup: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-18614acc")]).then(function() {
                                    var t = [a("2424")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "应用组", notNeedLogin: !1, auth: "AppGroupManage" },
                            css: [],
                            js: ["ueditor/ueditor.config.min.js", "ueditor/ueditor.all.min.js", "ueditor/lang/zh-cn/zh-cn.min.js"]
                        },
                        materialLibrary: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-57e6a106")]).then(function() {
                                    var t = [a("cb59")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "素材库", notNeedLogin: !1, auth: "AppMaterialManage" },
                            css: [],
                            js: []
                        },
                        list: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-82f932e8")]).then(function() {
                                    var t = [a("42f8")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "我的事项", notNeedLogin: !1, auth: "AppManage" },
                            css: [],
                            js: []
                        },
                        newmatter: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-59601310"), a.e("chunk-cb66db4e")]).then(function() {
                                    var t = [a("e3f9")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "添加事项", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: ["ueditor/ueditor.config.js", "ueditor/ueditor.all.js", "ueditor/lang/zh-cn/zh-cn.js"]
                        },
                        matterbpmn: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-4fe55158")]).then(function() {
                                    var t = [a("cee8")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "版本编辑", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        archivedata: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-785926d5")]).then(function() {
                                    var t = [a("53ef")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "查看归档数据", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        archiveChart: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-9cec785e")]).then(function() {
                                    var t = [a("4e0b")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "图表统计", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: ["js/echarts.simple.min.js"]
                        },
                        evaluate: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-dde75352")]).then(function() {
                                    var t = [a("e5d1")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "评价", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        detail: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-73fc9183"), a.e("chunk-76dddb03")]).then(function() {
                                    var t = [a("e959")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "服务详情", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        start: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-73fc9183"), a.e("chunk-bc23a286"), a.e("chunk-7015abf2")]).then(function() {
                                    var t = [a("5dba")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "发起事项", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: ["ueditor/ueditor.config.min.js", "ueditor/ueditor.all.min.js", "ueditor/lang/zh-cn/zh-cn.min.js"]
                        },
                        startStep: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-73fc9183"), a.e("chunk-bc23a286"), a.e("chunk-1ef3109e")]).then(function() {
                                    var t = [a("b4e1")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "发起事项", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: ["ueditor/ueditor.config.min.js", "ueditor/ueditor.all.min.js", "ueditor/lang/zh-cn/zh-cn.min.js"]
                        },
                        print: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-73fc9183"), a.e("chunk-bc23a286"), a.e("chunk-0edb760f")]).then(function() {
                                    var t = [a("4aaf")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "打印", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        qrcode: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-73fc9183"), a.e("chunk-bc23a286"), a.e("chunk-1317f1ff")]).then(function() {
                                    var t = [a("71dc")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "打印", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        details: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-73fc9183"), a.e("chunk-bc23a286"), a.e("chunk-1317f1ff")]).then(function() {
                                    var t = [a("71dc")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "详情查看", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        index: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-3195db68")]).then(function() {
                                    var t = [a("1f38")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "我的事项", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        examine: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-73fc9183"), a.e("chunk-bc23a286"), a.e("chunk-b18f495c")]).then(function() {
                                    var t = [a("2bb2")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "我的签批", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        rejectStep: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-73fc9183"), a.e("chunk-bc23a286"), a.e("chunk-41950f4c")]).then(function() {
                                    var t = [a("047b")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "修改", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        m_detail: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-2db1e0c5"), a.e("chunk-0fd7ae10")]).then(function() {
                                    var t = [a("7a85")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "服务详情", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        sealcheckcode: {
                            comLoad: function(e) {
                                a.e("chunk-4d92d5fe").then(function() {
                                    var t = [a("bcff")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "签章验证", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        m_start: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-73fc9183"), a.e("chunk-bc23a286"), a.e("chunk-7c51bd7a")]).then(function() {
                                    var t = [a("78b1")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "发起事项", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        m_startStep: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-73fc9183"), a.e("chunk-bc23a286"), a.e("chunk-4e414cd2")]).then(function() {
                                    var t = [a("abd5")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "发起事项", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        m_launch: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-e9f20a10"), a.e("chunk-483ecc60")]).then(function() {
                                    var t = [a("c811")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "我的发起", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        m_launchSearch: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-e9f20a10"), a.e("chunk-9bb41ee0")]).then(function() {
                                    var t = [a("8aa5")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "搜索", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        m_index: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-2db1e0c5"), a.e("chunk-3b07edf3")]).then(function() {
                                    var t = [a("a3dd")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "我的事项", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        m_search: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-e9f20a10"), a.e("chunk-388c8778")]).then(function() {
                                    var t = [a("8d29")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "搜索", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        m_examine: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-73fc9183"), a.e("chunk-bc23a286"), a.e("chunk-7ea494cd")]).then(function() {
                                    var t = [a("7408")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "我的签批", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        m_rejectStep: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-73fc9183"), a.e("chunk-bc23a286"), a.e("chunk-00e7c217")]).then(function() {
                                    var t = [a("57c7")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "我的签批", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        preview: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-73fc9183"), a.e("chunk-bc23a286"), a.e("chunk-0539f2b0")]).then(function() {
                                    var t = [a("77c3")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "预览表单", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        b_feedback: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-0fdbe22f")]).then(function() {
                                    var t = [a("52e4")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "意见反馈", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        }
                    },
                    report: {
                        reportForm: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-46c92a3d")]).then(function() {
                                    var t = [a("fa8b")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "报表设置", notNeedLogin: !1, auth: "ReportManage" },
                            css: [],
                            js: []
                        },
                        newReport: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-4ec92e32")]).then(function() {
                                    var t = [a("7ab8")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "新建报表", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        generalReportDetail: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-73fc9183"), a.e("chunk-052d0b21"), a.e("chunk-35ad88fb")]).then(function() {
                                    var t = [a("a5e8")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "报表详情", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        graphicReportDetail: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-73fc9183"), a.e("chunk-052d0b21"), a.e("chunk-252e2bbc")]).then(function() {
                                    var t = [a("d652")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "报表详情", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: ["js/echarts.simple.min.js"]
                        },
                        threeGeneralReportDetail: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-73fc9183"), a.e("chunk-052d0b21"), a.e("chunk-08d235f6")]).then(function() {
                                    var t = [a("8b49")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "报表详情", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        threeGraphicReportDetail: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-73fc9183"), a.e("chunk-052d0b21"), a.e("chunk-43d43526")]).then(function() {
                                    var t = [a("6c47")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "报表详情", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: ["js/echarts.simple.min.js"]
                        },
                        sorting: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-0a0940d2")]).then(function() {
                                    var t = [a("d108")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "排序管理", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        index: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-3ec117f6")]).then(function() {
                                    var t = [a("b9f3")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "数据中心", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        detail: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-73fc9183"), a.e("chunk-052d0b21"), a.e("chunk-06cfb6e6")]).then(function() {
                                    var t = [a("4e95")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "我的数据", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: ["js/echarts.simple.min.js"]
                        },
                        print: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-73fc9183"), a.e("chunk-052d0b21"), a.e("chunk-4565e728")]).then(function() {
                                    var t = [a("a876")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "打印", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: ["js/echarts.simple.min.js"]
                        },
                        m_index: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-064faaa6")]).then(function() {
                                    var t = [a("c28b")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "数据中心", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        m_search: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-2f2ca2ce")]).then(function() {
                                    var t = [a("341c")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "报表查询", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        m_detail: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-1fea3aa2")]).then(function() {
                                    var t = [a("bf77")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "报表详情", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: ["js/echarts.simple.min.js"]
                        }
                    },
                    user: {
                        userData: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-ac762624")]).then(function() {
                                    var t = [a("4d6b")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "用户数据", notNeedLogin: !1, auth: "DepartManage" },
                            css: [],
                            js: []
                        },
                        newuser: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-58f1df36")]).then(function() {
                                    var t = [a("3a7a")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "新建用户", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        teamAdmin: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-5c8a8beb")]).then(function() {
                                    var t = [a("92a8")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "标签管理", notNeedLogin: !1, auth: "TeamCategoryManage" },
                            css: [],
                            js: []
                        },
                        departManage: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-85f1646a")]).then(function() {
                                    var t = [a("2d21")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "部门管理", notNeedLogin: !1, auth: "DepartManage" },
                            css: [],
                            js: []
                        },
                        postManage: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-2b9b6c99")]).then(function() {
                                    var t = [a("459d2")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "岗位管理", notNeedLogin: !1, auth: "JobManage" },
                            css: [],
                            js: []
                        },
                        signManage: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-f532982c")]).then(function() {
                                    var t = [a("e77e")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "公章管理", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        signatureRecord: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-5d2111d6")]).then(function() {
                                    var t = [a("c0a5")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "个人签章记录", notNeedLogin: !1, auth: "SignManage" },
                            css: [],
                            js: []
                        },
                        messageAuth: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-cc8775f0")]).then(function() {
                                    var t = [a("0fa8")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "信息权限", notNeedLogin: !1, auth: "UserinfoAuthManage" },
                            css: [],
                            js: []
                        }
                    },
                    backHome: {
                        index: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-89ce40fe")]).then(function() {
                                    var t = [a("8a27")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "后台首页", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        message: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-7f923980")]).then(function() {
                                    var t = [a("f1cf")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "站内通知", notNeedLogin: !1, auth: "SiteNoticeManage" },
                            css: [],
                            js: []
                        },
                        newNotice: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-a36a538e")]).then(function() {
                                    var t = [a("d731")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "新建通知", notNeedLogin: !1, auth: "SiteNoticeManage" },
                            css: [],
                            js: ["ueditor/ueditor.config.js", "ueditor/ueditor.all.js", "ueditor/lang/zh-cn/zh-cn.js"]
                        },
                        siteConfig: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-332dfd9a")]).then(function() {
                                    var t = [a("2493")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "网站配置", notNeedLogin: !1, auth: "FrontEndManage" },
                            css: [],
                            js: []
                        },
                        carousel: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-5912e734")]).then(function() {
                                    var t = [a("0192")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "轮播图管理", notNeedLogin: !1, auth: "FrontEndManage" },
                            css: [],
                            js: []
                        },
                        appManage: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-0f64398f")]).then(function() {
                                    var t = [a("da24")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "应用管理", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        comment: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-d2260cfa")]).then(function() {
                                    var t = [a("1582")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "评价管理", notNeedLogin: !1, auth: "CommentManage" },
                            css: [],
                            js: []
                        },
                        infoChannel: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-23d4be1a")]).then(function() {
                                    var t = [a("e95a")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "消息渠道管理", notNeedLogin: !1, auth: "MessageChannelManage" },
                            css: [],
                            js: []
                        },
                        wordManage: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-d101f7ee")]).then(function() {
                                    var t = [a("5912")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "敏感词管理", notNeedLogin: !1, auth: "SensitiveWordManage" },
                            css: [],
                            js: []
                        },
                        companyManage: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-3a7e2760")]).then(function() {
                                    var t = [a("4591")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "微信管理", notNeedLogin: !1, auth: "WechatManage" },
                            css: [],
                            js: ["ueditor/ueditor.config.js", "ueditor/ueditor.all.js", "ueditor/lang/zh-cn/zh-cn.js"]
                        },
                        otherSer: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-1f7f9f18")]).then(function() {
                                    var t = [a("97b9")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "第三方服务", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        backAuth: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-4888bb2e")]).then(function() {
                                    var t = [a("c9af")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "后台权限", notNeedLogin: !1, auth: "super" },
                            css: [],
                            js: []
                        },
                        statistic: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-1e851f9b")]).then(function() {
                                    var t = [a("151a")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "统计", notNeedLogin: !1, auth: "StatisticsManage" },
                            css: [],
                            js: ["js/echarts.simple.min.js"]
                        },
                        admin: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-7575032e")]).then(function() {
                                    var t = [a("240d")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "管理员", notNeedLogin: !1, auth: "super" },
                            css: [],
                            js: []
                        },
                        systemConfig: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-03c1e51b")]).then(function() {
                                    var t = [a("e1ff")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "系统配置", notNeedLogin: !1, auth: "SystemConfigManage" },
                            css: [],
                            js: []
                        },
                        miniprogramConfig: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-795a3056")]).then(function() {
                                    var t = [a("c0b0")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "小程序管理", notNeedLogin: !1, auth: "MiniProgramManage" },
                            css: [],
                            js: []
                        },
                        fileConfig: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-bc23a286"), a.e("chunk-6b05f859")]).then(function() {
                                    var t = [a("7e72")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "文件配置", notNeedLogin: !1, auth: "FileConfigManage" },
                            css: [],
                            js: []
                        },
                        deploylog: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-4a6d8cf0")]).then(function() {
                                    var t = [a("1eba")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "操作日志", notNeedLogin: !1, auth: "OperationLogManage" },
                            css: [],
                            js: []
                        },
                        accredit: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-5331590c")]).then(function() {
                                    var t = [a("c8c5")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "授权", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        record: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-73d0c6bf")]).then(function() {
                                    var t = [a("fb1b")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "授权记录", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        noneAuth: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-2d0b95da")]).then(function() {
                                    var t = [a("3348")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "暂无权限", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        }
                    },
                    data: {
                        databaseSet: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-2d0b6e7a")]).then(function() {
                                    var t = [a("1ec3")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "数据库设置", notNeedLogin: !1, auth: "DatabaseManage" },
                            css: [],
                            js: []
                        },
                        dataSource: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-0f5c621f")]).then(function() {
                                    var t = [a("8191")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "数据源设置", notNeedLogin: !1, auth: "DatabaseManage" },
                            css: [],
                            js: []
                        },
                        promptSource: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-520a8c66")]).then(function() {
                                    var t = [a("cad0")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "提示组件设置", notNeedLogin: !1, auth: "DatabaseManage" },
                            css: [],
                            js: []
                        },
                        verificationSource: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-582f4b2a")]).then(function() {
                                    var t = [a("f8a4")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "验证组件设置", notNeedLogin: !1, auth: "DatabaseManage" },
                            css: [],
                            js: []
                        },
                        widgetSet: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-f48fd4fa")]).then(function() {
                                    var t = [a("704c")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "控件规则设置", notNeedLogin: !1, auth: "DatabaseManage" },
                            css: [],
                            js: []
                        },
                        firstMatter: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-1ad4b1ee")]).then(function() {
                                    var t = [a("6ab5")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "前置事项条件", notNeedLogin: !1, auth: "DatabaseManage" },
                            css: [],
                            js: []
                        },
                        trigger: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-6de5407c")]).then(function() {
                                    var t = [a("deb5")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "监听器", notNeedLogin: !1, auth: "DatabaseManage" },
                            css: [],
                            js: []
                        },
                        ocrAdmin: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-1865ea2a")]).then(function() {
                                    var t = [a("d9a7")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "OCR管理", notNeedLogin: !1, auth: "DatabaseManage" },
                            css: [],
                            js: []
                        },
                        timingTask: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-f47f9924")]).then(function() {
                                    var t = [a("fa00")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "定时任务", notNeedLogin: !1, auth: "DatabaseManage" },
                            css: [],
                            js: []
                        }
                    },
                    info: {
                        auth: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-3d9d0e28")]).then(function() {
                                    var t = [a("b361")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "信息权限", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        examine: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-cd91c9d4")]).then(function() {
                                    var t = [a("817d")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "信息审核", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        query: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-2b9bd79e")]).then(function() {
                                    var t = [a("4f9f")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "信息查询", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        }
                    },
                    printer: {
                        login: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-73fc9183"), a.e("chunk-724a8608")]).then(function() {
                                    var t = [a("a000")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "登录", notNeedLogin: !0, auth: "" },
                            css: [],
                            js: []
                        },
                        index: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-73fc9183"), a.e("chunk-bc23a286"), a.e("chunk-7ab6f87c")]).then(function() {
                                    var t = [a("20c2")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "首页", notNeedLogin: !1, auth: "" },
                            css: ["css/wx/4.0swiper.min.css"],
                            js: ["js/wx/4.0swiper.min.js"]
                        },
                        admin: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-6ec46dc7")]).then(function() {
                                    var t = [a("874b")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "打印机管理", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: ["ueditor/ueditor.config.js", "ueditor/ueditor.all.js", "ueditor/lang/zh-cn/zh-cn.js"]
                        },
                        log: {
                            comLoad: function(e) {
                                Promise.all([a.e("chunk-15b28f3e"), a.e("chunk-3f8ba3d1"), a.e("chunk-32b6e1e8")]).then(function() {
                                    var t = [a("c62f")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "打印机日志", notNeedLogin: !1, auth: "" },
                            css: [],
                            js: []
                        },
                        printstatus: {
                            comLoad: function(e) {
                                a.e("chunk-6684c94e").then(function() {
                                    var t = [a("4371")];
                                    e.apply(null, t)
                                }.bind(this)).catch(a.oe)
                            },
                            metaInfo: { title: "打印机自检", notNeedLogin: !0, auth: "" },
                            css: [],
                            js: []
                        }
                    },
                    common: {}
                }
            },
            yt = new mt(kt);
        yt.init = function() { var e = this.loadRouter(); return this.beforeEnterModule(e), e }, yt.pcToMobile = function(e, t, a) {
            var n = t.matched && t.matched.length && t.matched[0];
            if (!n) return !1;
            var i = commonHelper.isWeixin().isPhone || window.innerWidth <= 640,
                s = n.path,
                o = -1 !== s.indexOf("m_"),
                c = appConfig.pcMobileChange;
            if (appConfig.onlyClient()) {
                var r = "mobile" == appConfig.onlyClient();
                i = r
            }
            if (i !== o) {
                var u = o ? "mobilePath" : "pcPath",
                    d = o ? "pcPath" : "mobilePath",
                    f = !1;
                c.forEach((function(n) {
                    if (n[u] == s) {
                        switch (a(), n.type) {
                            case 1:
                                e.replace({ path: n[d], query: t.query });
                                break;
                            case 2:
                                n.changeFunc(e, n[d], t);
                                break
                        }
                        f = !0
                    }
                }))
            }
            return f
        }, yt.setMobileRem = function(e) {
            var t = e.matched && e.matched.length && e.matched[0];
            if (!t) return !1;
            window.removeEventListener("resize", this.changSize), -1 !== t.path.indexOf("m_") ? (this.changSize(), window.addEventListener("resize", this.changSize, !1)) : document.documentElement.style.fontSize = ""
        }, yt.changSize = function() {
            var e = document.documentElement.clientWidth;
            e = e <= 640 ? e : 640, e = e >= 320 ? e : 320, document.documentElement.style.fontSize = 100 * e / 375 + "px"
        }, yt.beforeEnterModule = function(e) {
            var t = this;
            e.beforeEach((function(a, n, i) {
                if (a.meta.notNeedLogin || bt["a"].checkLogin()) {
                    if (t.pcToMobile(e, a, i)) return !1;
                    a.meta.auth && !bt["a"].queryControl(a.meta.auth) && e.replace({ path: "/backHome/noneAuth" }), gt["a"].deleteAll(), gt["a"].add(a.query, "url"), t.setMobileRem(a), bt["a"].setSiteConfig((function() { i() }))
                } else bt["a"].toLogin()
            })), e.afterEach((function(e) { "pku" === commonHelper.getWebId() && window.webkit && window.webkit.messageHandlers.enterDetailWebView.postMessage(appConfig.baseUrl + e.fullPath.substr(1)) }))
        };
        var vt, Lt, wt, St = yt,
            jt = a("9f3a"),
            It = (a("e18c"), a("af86"), a("ce3c")),
            Ct = "SET_ALLPLUGINS",
            Pt = "ADD_STARTLOADING",
            Nt = "REDUCE_STARTLOADING",
            _t = "SET_ALLPRINTMAKE",
            Tt = "SET_PRINTMAKE",
            xt = "DEL_PRINTMAKE",
            Dt = "SET_PRIMARYUID",
            At = "SET_STARTERDEPARID",
            Ot = "SET_ISPRINTMAKE",
            Et = "SET_TABLEPAGEINFO",
            Mt = "SET_PRINTSTYLE",
            Rt = "SET_FORMLOADED",
            Ut = "ADD_WARNING",
            Bt = "CLEAR_WARNING",
            Ft = "SET_CHILDTABLE",
            Ht = "CHILDDATASOURCE",
            Kt = "CHILDNOCANSOURCE",
            qt = "CHILDNOCANSOURCEKEYS",
            $t = "REPEAT_OPERATIONALERT",
            Wt = "SET_SELECTTD",
            zt = "REFRESH_RTABLE",
            Gt = "SET_FORMSTATUS",
            Jt = "REFRESH_DATASOURCE",
            Vt = "RETABLE_IDS",
            Yt = "SET_SORT",
            Xt = (vt = {}, Object(It["a"])(vt, Ct, (function(e, t) {
                var a = t.id ? t.id : "0";
                n["default"].set(e.allplugin, a, t.allplugin)
            })), Object(It["a"])(vt, Pt, (function(e) { e.matterLoading++ })), Object(It["a"])(vt, Nt, (function(e) { e.matterLoading-- })), Object(It["a"])(vt, _t, (function(e, t) {
                var a = t.fid ? t.fid : 0;
                n["default"].set(e.repeatPrintInfo, a, t.data)
            })), Object(It["a"])(vt, Tt, (function(e, t) {
                var a = t.fid ? t.fid : 0,
                    i = t.tid ? t.tid : 0,
                    s = t.trid ? t.trid : 0;
                e.repeatPrintInfo[a] || n["default"].set(e.repeatPrintInfo, a, {}), e.repeatPrintInfo[a][i] || n["default"].set(e.repeatPrintInfo[a], i, {}), n["default"].set(e.repeatPrintInfo[a][i], s, t.data)
            })), Object(It["a"])(vt, xt, (function(e, t) {
                var a = t.fid ? t.fid : 0,
                    i = t.tid ? t.tid : 0,
                    s = t.trid ? t.trid : 0;
                if (!e.repeatPrintInfo[a] || !e.repeatPrintInfo[a][i]) return !1;
                n["default"].delete(e.repeatPrintInfo[a][i], s)
            })), Object(It["a"])(vt, Dt, (function(e, t) { e.primaryUid = t.uid })), Object(It["a"])(vt, At, (function(e, t) { e.starterDepartId = t.starterDepartId })), Object(It["a"])(vt, Ot, (function(e, t) { e.isPrintMake = t.isPrintMake })), Object(It["a"])(vt, Et, (function(e, t) {
                var a = t.fid ? t.fid : "0";
                n["default"].set(e.tablePageInfo, a, t.data)
            })), Object(It["a"])(vt, Mt, (function(e, t) {
                var a = t.fid ? t.fid : "0";
                n["default"].set(e.printStyle, a, t.data)
            })), Object(It["a"])(vt, Rt, (function(e, t) {
                var a = t.fid ? t.fid : "0";
                n["default"].set(e.formLoaded, a, t.status)
            })), Object(It["a"])(vt, Ut, (function(e, t) { e.warningErrors.push(t) })), Object(It["a"])(vt, Bt, (function(e, t) { e.warningErrors = [] })), Object(It["a"])(vt, Ft, (function(e, t) { e.childTable = t })), Object(It["a"])(vt, Ht, (function(e, t) { n["default"].set(e.childDataSource, t.fid, t.params) })), Object(It["a"])(vt, Kt, (function(e, t) { n["default"].set(e.childNoCanSource, t.fid, t.ids) })), Object(It["a"])(vt, qt, (function(e, t) { n["default"].set(e.childNoCanSourceKeys, t.fid, t.keys) })), Object(It["a"])(vt, $t, (function(e, t) { e.repeatOperationAlert = t })), Object(It["a"])(vt, Wt, (function(e, t) {
                var a = {};
                for (var n in e.selectData) a[n] = t[n] ? t[n] : e.selectData[n];
                e.selectData = a
            })), Object(It["a"])(vt, zt, (function(e, t) { n["default"].set(e.refreshRTable, t.fid, t.params) })), Object(It["a"])(vt, Gt, (function(e, t) { n["default"].set(e.formStatus, t.fid, t) })), Object(It["a"])(vt, Jt, (function(e, t) { n["default"].set(e.refreshDataSource, t.fid, t.params) })), Object(It["a"])(vt, Vt, (function(e, t) {
                var a = {};
                a[t.key] = t.params, n["default"].set(e.retableIds, t.fid, a)
            })), Object(It["a"])(vt, Yt, (function(e, t) {
                var a = {};
                a[t.key] = t.data, n["default"].set(e.setSortInfo, t.fid, a)
            })), vt),
            Qt = (a("b130"), a("9302"), a("90aa"), {
                toReduceStartLoading: function(e) { setTimeout((function() { e.state.matterLoading > 0 && e.commit("REDUCE_STARTLOADING") }), 300) },
                initFormStatus: function(e, t) {
                    var a = { fid: t.fid, status: 1, initSourceList: [], usedSourceList: [] };
                    for (var n in t.plugins) {
                        var i = t.plugins[n];
                        1 == i.classtype && "dDataSource" == i.type && (i.attr.data.runStatus.includes(1) && a.initSourceList.push(i.key))
                    }
                    a.status = a.initSourceList.length ? 1 : 2, e.commit("SET_FORMSTATUS", a)
                },
                formSourceRun: function(e, t) {
                    var a = e.state.formStatus[t.fid];
                    if (!a.initSourceList.includes(t.sourceKey) || 2 == a.status) return !1;
                    a.usedSourceList.includes(t.sourceKey) || a.usedSourceList.push(t.sourceKey), a.usedSourceList.sort().join("_") == a.initSourceList.sort().join("_") && (a.status = 2), e.commit("SET_FORMSTATUS", a)
                },
                onlySetFormStatus: function(e, t) {
                    var a = e.state.formStatus[t.fid];
                    a.status = t.status, e.commit("SET_FORMSTATUS", a)
                }
            }),
            Zt = { namespaced: !0, state: function() { return { allplugin: {}, matterLoading: 0, isPrintMake: !1, repeatPrintInfo: {}, tablePageInfo: {}, printStyle: {}, formLoaded: {}, warningErrors: [], childTable: {}, childDataSource: {}, childNoCanSource: {}, childNoCanSourceKeys: {}, repeatOperationAlert: {}, selectData: { tableid: "", start: { id: "", row: 0, col: 0 }, end: { id: "", row: 0, col: 0 }, selectIds: [] }, refreshRTable: {}, formStatus: {}, refreshDataSource: {}, retableIds: {}, setSortInfo: {} } }, mutations: Xt, actions: Qt },
            ea = "UPDATA_SAVEDATA",
            ta = "UPDATE_NODEID",
            aa = "UPDATE_FORMS",
            na = "UPDATE_EVARLIST",
            ia = "UPDATE_FORMSHELPER",
            sa = "UPDATE_EVARLISTHELPER",
            oa = (Lt = {}, Object(It["a"])(Lt, ea, (function(e, t) { e.saveData = t })), Object(It["a"])(Lt, ta, (function(e, t) { e.currNodeId = t })), Object(It["a"])(Lt, aa, (function(e, t) { e.forms = t })), Object(It["a"])(Lt, na, (function(e, t) { e.evarList = t })), Object(It["a"])(Lt, ia, (function(e, t) { e.formsHelper = t })), Object(It["a"])(Lt, sa, (function(e, t) { e.evarHelper = t })), Lt),
            ca = { namespaced: !0, state: function() { return { saveData: {}, forms: {}, currNodeId: "", evarList: [], formsHelper: [], evarHelper: [] } }, mutations: oa },
            ra = { SET_NODEDATAS: function(e, t) { e.nodeDatas = t }, SET_SELECTUIDS: function(e, t) { e.selectNodeUid = t }, SET_SMSSEND: function(e, t) { e.sms_send = t }, My_TAST: function(e, t) { e.task = t }, My_SPONSOR: function(e, t) { e.sponsor = t }, SET_AGENT_INFO: function(e, t) { e.agent_info = t }, CLEAR_AGENT_INFO: function(e, t) { e.agent_info = {} }, FORM_MATTER: function(e, t) { n["default"].set(e.formMatter, t.type, t.data) } },
            ua = { clearUserSelectInfo: function(e) { e.commit("SET_NODEDATAS", []), e.commit("SET_SELECTUIDS", {}), e.commit("SET_SMSSEND", 0) } },
            da = { namespaced: !0, state: function() { return { nodeDatas: [], selectNodeUid: {}, sms_send: {}, sponsor: "", task: "", agent_info: {}, formMatter: { startWait: "" } } }, mutations: ra, actions: ua },
            fa = "UPDATA_GRANTMELISTS",
            la = "UPDATE_SHOWDATACENTER",
            ha = (wt = {}, Object(It["a"])(wt, fa, (function(e, t) { e.grantMeLists = t })), Object(It["a"])(wt, la, (function(e, t) { e.showDataCenter = t })), wt),
            pa = { namespaced: !0, state: function() { return { grantMeLists: null, showDataCenter: null } }, mutations: ha };
        n["default"].use(jt["a"]);
        var ma = new jt["a"].Store({ modules: { form: Zt, process: ca, matter: da, common: pa } });
        var ba = ma,
            ga = (a("0d0f"), function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("router-view")
            }),
            ka = [],
            ya = a("1462"),
            va = a("a340"),
            La = function() {
                function e(t) { Object(ya["a"])(this, e), this.oDiv = document.querySelector(t), this.disX = 0, this.disY = 0, this.init() }
                return Object(va["a"])(e, [{
                    key: "init",
                    value: function() {
                        this.oDiv.addEventListener("touchstart", function(e) {
                            var t = e.targetTouches[0];
                            this.disX = t.clientX - this.oDiv.offsetLeft, this.disY = t.clientY - this.oDiv.offsetTop, this.oDiv.addEventListener("touchmove", this.Fntouchmove.bind(this)), this.oDiv.addEventListener("touchend", function(e) { this.oDiv.removeEventListener("touchmove", this.Fntouchmove) }.bind(this))
                        }.bind(this))
                    }
                }, {
                    key: "Fntouchmove",
                    value: function(e) {
                        e.preventDefault();
                        var t = e.targetTouches[0],
                            a = t.clientX - this.disX,
                            n = t.clientY - this.disY,
                            i = $(window).width() - $(this.oDiv).outerHeight(!0),
                            s = $(window).height() - $(this.oDiv).outerHeight(!0);
                        a > 0 && a < i && (this.oDiv.style.left = a + "px"), n > 0 && n < s && (this.oDiv.style.top = n + "px")
                    }
                }]), e
            }(),
            wa = function() {
                function e(t) { Object(ya["a"])(this, e), this.ua = navigator.userAgent, this.isAndroid = -1 !== this.ua.indexOf("Android") || -1 !== this.ua.indexOf("Adr"), this.iswx = -1 !== this.ua.toLowerCase().indexOf("micromessenger"), this.isMiniprogram = "miniprogram" === window.__wxjs_environment, this.path = "", this.showReturnBtnPaths = t }
                return Object(va["a"])(e, [{ key: "initReturnBtn", value: function() { this.isAndroid && this.iswx && !this.isMiniprogram && (this.removeReturnBtn(), this.showReturnBtnPaths.includes(this.path) && (window.history.length > 1 || document.referrer) && (this.createReturnBtn(), new La("#android_retrun_btn"), this.return())) } }, {
                    key: "createReturnBtn",
                    value: function() {
                        if (!$("#android_retrun_btn").length) {
                            var e = $("<div>返回</div>").attr({ id: "android_retrun_btn" });
                            e.appendTo("body")
                        }
                    }
                }, { key: "removeReturnBtn", value: function() { $("#android_retrun_btn").remove() } }, { key: "return", value: function() { $("body").on("click", "#android_retrun_btn", (function() { window.history.length > 1 ? window.history.go(-1) : location.href = document.referrer })) } }]), e
            }(),
            Sa = function() {
                function e() { Object(ya["a"])(this, e) }
                return Object(va["a"])(e, [{ key: "init", value: function() { bt["a"].checkLogin() && this.createrEle() } }, {
                    key: "createrEle",
                    value: function() {
                        this.removeEle();
                        var e = "";
                        document.cookie && (e = document.cookie.split("=")[1]);
                        var t = $("<img />").attr({ id: "visits_collect", src: "".concat(appConfig.apiBaseUrl, "/api/visits/collect?agent=").concat(location.href.includes("m_") ? "mobile" : "pc", "&uid=").concat(e), style: "display: none;" });
                        t.appendTo("body")
                    }
                }, { key: "removeEle", value: function() { $("#visits_collect").remove() } }]), e
            }(),
            ja = Sa,
            Ia = { data: function() { return { showReturnBtnPaths: ["/site/m_search", "/site/m_message", "/site/m_changeInfo", "/site/m_addapp", "/matter/m_detail", "/matter/m_start", "/matter/m_startStep", "/matter/m_examine", "/matter/m_rejectStep", "/matter/m_launchSearch", "/matter/m_search", "/report/m_detail", "/report/m_search"], androidReturnBtn: null, visitsCollect: null } }, created: function() { this.androidReturnBtn = new wa(this.showReturnBtnPaths), this.visitsCollect = new ja }, updated: function() { this.androidReturnBtn.path = this.$route.path, this.androidReturnBtn.initReturnBtn(), this.visitsCollect.init() } },
            Ca = Ia,
            Pa = a("9ca4"),
            Na = Object(Pa["a"])(Ca, ga, ka, !1, null, null, null),
            _a = Na.exports;
        window.Vue = n["default"], window.$ = window.jQuery = l.a, window.EventSource = ot["NativeEventSource"] || ot["EventSourcePolyfill"], window.commonHelper = ct["a"];
        var Ta = St.init();
        n["default"].prototype.appRouter = Ta, n["default"].prototype.appStore = ba, new n["default"]({ router: Ta, store: ba, i18n: st, render: function(e) { return e(_a) } }).$mount("#app")
    },
    6128: function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() { return u }));
        a("ecb4"), a("e18c");
        var n = a("e793"),
            i = a("c0a4"),
            s = a("82ae"),
            o = a.n(s),
            c = a("1d8b"),
            r = a("fed1"),
            u = function(e, t, a) {
                var s = e.url;
                if (void 0 === e) return console.error("必须传递参数"), !1;
                e.url.toLocaleLowerCase().indexOf("http") < 0 && (e.url = c["a"].getApi(e.url)), e.withCredentials = !0;
                var u = { "Content-Type": "application/x-www-form-urlencoded" };
                return -1 === window.location.href.indexOf("local.") && (u["X-Requested-With"] = "XMLHttpRequest"), e.headers ? e.headers = Object(n["a"])(Object(n["a"])({}, u), e.headers) : e.headers = u, e.data = Object(n["a"])(Object(n["a"])({}, e.data), i["default"].prototype.appCommonH.getAgentInfo(i["default"].prototype.appStore.state.matter.agent_info)), "get" == e.method.toLowerCase() && (e.params = e.data, delete e.data), e.data && (e.data = r.stringify(e.data)), new Promise((function(n, c) {
                    o()(e).then((function(e) {
                        var a = e.data || {};
                        a.e = +a.e, 10042 != a.e ? 10044 == a.e ? i["default"].prototype.$message({ type: "error", message: a.m, showClose: !0 }) : (t && t(e.data), n(e.data)) : i["default"].prototype.authH.toLogin()
                    })).catch((function(e) { console.error(e, "API " + s), a && a(e), c(e) }))
                }))
            };
        i["default"].prototype.appFetch = u
    },
    6367: function(e, t, a) {
        "use strict";
        a("fe59"), a("e35a"), a("0d7a"), a("08ba");
        var n = a("e793"),
            i = a("c0a4"),
            s = a("6128"),
            o = {
                _varKey: "$EVN",
                formCallbacks: [],
                getMatterEd: !1,
                init: function() { window[this._varKey] || (window[this._varKey] = {}) },
                add: function(e, t) {
                    var a = {};
                    for (var i in e) a[t + "_" + i] = e[i];
                    this.deleteByDimension(t), window[this._varKey] = Object(n["a"])(Object(n["a"])({}, window[this._varKey]), a)
                },
                get: function(e) { var t = e.split("."); return t[0] !== this._varKey ? e : window[this._varKey] && window[this._varKey][t[1]] ? 3 == t.length ? window[this._varKey][t[1]][t[2]] : window[this._varKey][t[1]] : "" },
                delete: function(e) { window[this._varKey] && window[this._varKey][e] && delete window[this._varKey][e] },
                deleteByDimension: function(e) { for (var t in window[this._varKey]) t.split(0, 4) == e + "_" && this.delete(t) },
                getMatterEvn: function(e, t) {
                    var a = this;
                    this.getMatterEd ? t() : this.formCallbacks.push(t), 1 == this.formCallbacks.length && Object(s["a"])({ url: "getMatterEvn", method: "get", data: { app_id: e.appId, inst_id: e.instId, task_id: e.taskId, sess_id: e.sessId } }, (function(e) {
                        if (a.getMatterEd = !0, 0 == e.e) {
                            var t = {};
                            for (var n in e.d) t[e.d[n].key] = e.d[n].value;
                            a.add(t, "matter")
                        } else console.error("获取事项环境变量失败：" + e.m);
                        a.formCallbacks.forEach((function(e) { e() })), a.formCallbacks = []
                    }), (function() { a.getMatterEd = !0, a.formCallbacks.forEach((function(e) { e() })), a.formCallbacks = [], console.error("获取事项环境变量失败") }))
                },
                deleteAll: function() { this.getMatterEd = !1, this.formCallbacks = [], window[this._varKey] = {} },
                deleteOtherUrl: function() {
                    var e = {};
                    for (var t in window[this._varKey]) "url" === t.split("_")[0] && (e[t] = window[this._varKey][t]);
                    this.getMatterEd = !1, this.formCallbacks = [], window[this._varKey] = e
                }
            };
        o.init(), i["default"].prototype.evnHelper = o, t["a"] = o
    },
    9403: function(e, t, a) {
        "use strict";
        var n = a("c0a4"),
            i = { toPdfType: function(e) { var t = this.getConfig("isToPdf"); return t[e] ? t[e] : t["default"] }, getConfig: function(e) { return !(!appConfig.customConfig || !appConfig.customConfig[e]) && appConfig.customConfig[e] }, getConfigId: function(e, t) { var a = this.getConfig(e); return a[t] ? a[t] : a["default"] } };
        n["default"].prototype.customHelper = i, t["a"] = i
    },
    a4d9: function(e, t, a) {
        var n, i = a("08a9");
        e.exports = (n = { webId: "buaa", login: "", logout: "/site/login/cas-logout", userKeyPrefix: "yzs", version: "1.0", env: "product", evnWebid: "buaa", sourceV: 1599141970712, customConfig: { isToInfoCenter: !1 } }, i(n, "sourceV", 1599141970712), i(n, "onlyClient", (function() { return !1 })), n)
    },
    e425: function(e, t) { e.exports = { login: "/site/login/login", loginCode: "/site/login/code", logout: "/site/login/logout", GetOauthCode: "/open/connection/get-code", banners: "/api/home/get-banners", getNewApps: "/api/home/new-apps", getMessageLists: "/site/message/lists", addMyApps: "/site/user/add-my-apps", sitmessageread: "/site/message/read", thirdClickNum: "/site/apps/click-num", appSearch: "/api/home/app-search", printerHelpL: "/api/apps/printer-help", notificationdetail: "/site/notification/detail", notificationid: "/site/notification/type-index", SSDeparCount: "/site/statistics/department-count", SSServiceCount: "/site/statistics/service-count", recentappssave: "/site/apps/recent-apps-save", siteLastApps: "/site/apps/last-apps", siteAllList: "/site/apps/list", getAppDetail: "/api/apps/detail", myApps: "/site/user/my-apps", getProcessInfoNew: "/site/process/start-info", sitmessagelist: "/site/message/lists", sitmessagedel: "/site/message/delete", sealConfig: "/site/seal/seal-config", sealSetPwd: "/site/seal/set-seal-password", sealUserInfo: "/site/seal/user-info", sealInfo: "/site/seal/get-personal-seal", addSeal: "/site/seal/add-seal", personOfficialSealListnew: "/site/seal/my-office-seal", sealUpdateSeal: "/site/seal/update-seal", sealChangeImagenew: "/site/seal/set-personal-seal", signInfo: "/site/seal/sign-info", sealHistory: "/site/seal/seal-history", signChangeImage: "/site/seal/change-sign-image", addSign: "/site/seal/add-sign", getgrantlists: "/site/grant-account/lists", savegrantlists: "/site/grant-account/save", delgrantlists: "/site/grant-account/delete", sitesearchuser: "/site/user/search-user", addScientificUser: "/site/bupt/scientific-user-add", scientificUserList: "/site/bupt/scientific-user-list", scientificUserDel: "/site/bupt/scientific-user-delete", entrustList: "/site/agent-deal/list", newEntrust: "/site/agent-deal/add", changeEntruststate: "/site/agent-deal/change-status", getonceEntrust: "/site/agent-deal/get", deleteEntrust: "/site/agent-deal/delete", changeEntrust: "/site/agent-deal/edit", dowmloadCenter: "/site/download-centre/list", downloadRest: "/site/download-centre/rest-export", getDownloadFile: "/site/download-centre/verify-file-size", getAgentList: "/site/user/agent-list", saveAgent: "/site/user/save-agent", agentInfo: "/site/user/agent-info", changeAgentStatus: "/site/user/change-agent-status", delAgent: "/site/user/del-agent", hasAgent: "/site/user/has-agent", agentApp: "/site/user/agent-app", agentAuth: "/site/process/agent-set", renewuserInfo: "/site/user/infov", reuserssavev: "/site/user/savev", reinfoconfig: "/site/user/info-config", reusersdepartv: "/api/user/departv", reuserdictionary: "/api/user/dictionary", resiteexnotice: "/site/user/examine-notice", reuseridentify: "/system/user/identify", reusercancelidentify: "/system/user/cancel-identify", redelusertable: "/site/user/del-user-info", reuserapprover: "/system/user/approver", reusersimportmy: "/site/user/import-my", validate_pass: "/site/user/validate-password", repassword: "/site/user/repassword", update_mobile: "/site/user/update-mobile", validate_code: "/site/message/sms", myDataTags: "/site/user/my-data-tags", tableconfig: "/site/user/center-config", agreepromise: "/site/user/agree-promise", getJob: "/site/job/depart-job", allDepartment: "/api/user/departv", outsideLogin: "/site/login/outside-login", checkMoblie: "/site/login/check-mobile", resetPassword: "/site/login/reset-password", loginSendCode: "/site/login/send", forceResetpwd: "/site/login/force-resetpwd", getUserCode: "/site/tools/get-usercode", personalCenInfo: "/site/personal-center/info", personalCenEdit: "/site/personal-center/edit", backGetAuth: "/system/personal-center/get-auth", backUpdateAuth: "/system/personal-center/updata-auth ", siteGetFolder: "/site/apps/folder", personalPassword: "/site/personal-center/reset-password", newlist: "/site/apps/new-list", appsnotify: "/site/apps/notify-list", appshotnew: "/site/apps/apps-hot-new", appstypelist: "/site/apps/apps-type-list", attachmenthot: "/site/apps/attachment-hot", feedback: "/site/apps/add-feedback", schoolhealthcard: "/site/go-back-school/health-card", getDormitoryCateStatus: "/site/go-back-school/check-gate-or-dormitory", formLists: "/site/form/lists", toPdf: "/pdf-server/index", getToPdfStatus: "/pdf-server/status", cloneForm: "/system/form/clone", getBpmnFormList: "/system/bpmn/all", getDataByExeclPath: "/site/tools/excel-parse", repeatFile: "/api/upload/zip-file", savePrintInfo: "/site/form/save-preview", saveFormDraft: "/site/form/save-form-data-draft", codeGetForm: "/api/form/get-form", getFromMode: "/site/form/get-formv", getFormOneDetail: "/site/form/detail", saveFormAttr: "/system/form/save-attributes", updateFormModel: "/system/form/modify", createFormModel: "/system/form/create", createNewForm: "/system/form/create", getChildTableData: "/site/process/child-table-data", goodList: "/site/goods/lists", getMatterEvn: "/site/process/variables", getnoticeList: "/system/form-notice/list", getBindColumn: "/site/data/bind-api-list", getDataSourceList: "/site/data-source/all", getColumnMap: "/site/data-source/dictionary", vBpmnFormList: "/system/bpmn/list-form", fBpmnCom: "/system/form/get-components", departSeal: "/system/department/depart-seal", bpmnSearchForm: "/system/form/search-app", getRelation: "/api/user/relation", searchUserRelation: "/site/user/user-search-range", getvalidatorList: "/system/form-validator/list", getnoticeDetail: "/site/form-notice/detail", searchBindInfo: "/site/data/bind-data", searchCountry: "/api/country/search", getDataSourceData: "/site/data-source/detail", getUserbefore: "/site/user/search-user", allJob: "/site/job/all", allTeam: "/site/user/team", getPdfSeal: "/site/seal/pdf-seal", goodDetail: "/site/goods/detail", formFee: "/site/form-pay/form-fee", getOrder: "/site/form-pay/get-order", getinstIdOrder: "/site/form-pay/get-form-order", getProjectnumber: "/site/activiti/project-number", region: "/api/dictionary/province", roomAllList: "/site/pku-room/select-room-name", getRoom: "/site/pku-room/get-room-list", getDetailRoom: "/site/pku-room/get-room-list-by-id", mySeal: "/site/seal/my-office-seal", processSubmit: "/site/process/submit", searchUserPlugin: "/site/user/form-search-user", uploadindex: "/api/upload/index", checkChild: "/site/process/check-child-table", getOcrApi: "/system/ocr/all", getOcrApiDetail: "/system/ocr/detail", getOcrData: "/site/ocr/get-data", baseupload: "/api/upload/base-upload", fsBpmnCom: "/system/form/multi-components", getSystemVar: "/system/bpmn/user-variables", getProcessDefinition: "/system/bpmn/get-bpmn-infov", listTrigger: "/system/trigger/list", saveBpmnAttribute: "/system/bpmn/save-attributes", saveBpmn: "/system/bpmn/save", bpmnGetUser: "/system/user/simple-search", tagsTag: "/system/tags/tags", saveTag: "/system/tags/save", publishTag: "/system/tags/publish", deleteTag: "/system/tags/delete", sortTag: "/system/tags/sort", searchTag: "/system/tags/list-app", getagList: "/system/tags/tag-list", setTagMatter: "/system/app/set-tag", sortTagApp: "/system/tags/sort-app", deleteMatterApp: "/system/tags/delete-app", addTagApp: "/system/tags/add-app", getApp: "/system/app-folder/index", saveApp: "/system/app-folder/save", publishApp: "/system/app-folder/publish", deleteApp: "/system/app-folder/delete", moveApp: "/system/app-folder/move", delMaterial: "/system/material-picture/delete", addMaterial: "/system/material-picture/save", saveMaterialClassify: "/system/material-classification/save", delMaterialClassify: "/system/material-classification/delete", prefixList: "/system/prefix/index", getIdentity: "/site/identity/index", getCommentConf: "/system/comment-manage/index", getFormMatterList: "/system/form/version-list", saveMatterBase: "/system/app/save-base", getmatterDetail: "/system/app/detail", appVersionList: "/system/bpmn/list", createAppVerion: "/system/bpmn/create-version", bpmnSaveForm: "/system/bpmn/save-form", bpmnAppDetail: "/system/bpmn/detail", bpmnClone: "/system/bpmn/clone", publishBpmn: "/system/bpmn/publish", bpmnSaveTask: "/system/bpmn/save-task", getTriggerList: "/system/trigger/app-get-trigger", moveTag: "/system/app/set-tag", publishMatter: "/system/app/publish", unpublishMatter: "/system/app/unpublish", getEventSource: "/system/bpmn/source-key", getFormAuth: "/system/form/get-form-auth", enableForm: "/system/form/enable-version", saveSelectForms: "/system/form/save-select", setFormAuth: "/system/form/save-form-auth", getFormTip: "/system/form/get-form-tip", upsataFormTip: "/system/form/update-form-tip", formSaveHide: "/system/form/save-hide", formSaveNote: "/system/form/save-note", bpmnSaveeHide: "/system/bpmn/save-hide", bpmnSaveNote: "/system/bpmn/save-note", appHide: "/system/app/hide", newGetArchive: "/site/archive/query", newArchiveFormCom: "/site/archive/form-components", newdelArchive: "/site/archive/delete-archive", recentExportRecord: "/site/archive/recent-export-record", pollingStatus: "/site/archive/polling-state", exportToExcel: "/site/archive/query-to-excel", exportToAttach: "/site/archive/attach-export", tongjiArchive: "/site/archive/tongji", getCommentsList: "/system/comments/lists", myStarted: "/site/process/inst-list", getMyTodo: "/site/process/my-todo", getMyRead: "/site/process/my-read", getMyOversee: "/site/process/my-oversee", mGetMyTodo: "/site/process/my-todov", mGetMyRead: "/site/process/my-readv", mGetMyOversee: "/site/process/my-overseev", getProcessLog: "/site/process/log", getThirdpartyLog: "/site/process/thirdparty-log", getCommentCon: "/site/comments/config", subComment: "/site/comments/comment", getBatchNodes: "/site/process/batchable-nodes", getMyBatchList: "/site/process/my-batch", toBatchByTaskIds: "/site/process/batch", toBatchByNodeId: "/site/process/batch-by-node", getBatchProgress: "/site/process/get-batch-progress", pkuDelDraft: "/site/form/del-apps-form", revokeTodo: "/site/process/revoke", getUserMyDepar: "/site/user/my-depart", gitstartInfo: "/site/form/start-data", postFormFirstData: "/site/apps/launch", getDataByAppId: "/api/form/get-data", startSaveDraft: "/site/form/save-form-data-draft-apps", sealCheckCode: "/site/seal/seal-check-code", searchAgentUser: "/site/user/search-agent-user", dealInfo: "/site/process/deal-info", getformchange: "/site/form/change-log", dealData: "/site/form/deal-data", getShortcutList: "/site/shortcut/list", addShortcut: "/site/shortcut/add", deleteShortcut: "/site/shortcut/delete", postFormData: "/site/form/save", uploadAuth: "/site/attach/auth-upload", downloadAuth: "/site/attach/auth-download", saveFormAndTask: "/site/task/deal", changeApprover: "/site/process/change-approver", matterArchiveEdit: "/site/archive/edit", getstartdata: "/api/form/get-start-data", getTaskAuth: "/api/form/get-task-data", downPdf: "/pdf-server/down", getDataBySessId: "/api/form/get-session-data", getDataByInstId: "/api/form/get-inst-data", revokeMatter: "/site/activiti/revoke", myReminder: "/site/process/reminder", leaveCountrySave2: "/site/pku-seal/reject-update", taskaddsign: "/site/task/add-sign", batchRecord: "/site/process/batch-record", restBatch: "/site/process/rest-batch", delBatch: "/site/process/del-batch", getYears: "/site/process/system-up-year", getAppNames: "/site/process/get-app-names", getRecordNode: "/site/process/get-record-node", zipfile: "/api/upload/zip-file", attributelist: "/system/app/attribute-list", keywordslist: "/system/keywords/list", keywordssave: "/system/keywords/save", keywordsdelete: "/system/keywords/delete", feedbacklist: "/system/feedback/list", feedbackexport: "/system/feedback/export", feedbackdetail: "/system/feedback/detail", saveBaseReport: "/system/apps-report/save-base", reportFormList: "/system/apps-report/list", reportPublish: "/system/apps-report/publish", deleteReport: "/system/apps-report/delete", getReportFormList: "/system/apps-report/form-list", getSystemFields: "/system/apps-report/get-system-fields", getFormconponent: "/system/apps-report/all-components", saveReport: "/system/apps-report/save-info", getAppForm: "/system/form/get-forms", sortList: "/system/apps-report/sort-list", clickSort: "/system/apps-report/sort", topAdNoTop: "/system/apps-report/set-top", getRepeatFiled: "/system/apps-report/repeat-filed", getReportDetail: "/site/apps-report/get", appsReportList: "/site/apps-report/query", appsReportGraph: "/site/apps-report/query-graph", getDepartNews: "/site/department/auth-tree", commonQueryList: "/site/apps-report/common-query-list", saveCommonQuery: "/site/apps-report/save-common-query", delCommonQuery: "/site/apps-report/common-query-delete", reportExcel: "/site/apps-report/query-excel", thirdpartyReportExcel: "/site/apps-report/thirdparty-query-excel", threeReportList: "/site/apps-report/thirdparty-query", threeReportGraph: "/site/apps-report/thirdparty-query-graph", getHotReport: "/api/home/hot-report", isHasEmail: "/site/tools/check-email", uestcReminder: "/site/uestc/one-click-reminder", getjustIdentity: "/site/identity/role", getAuthListgroup: "/system/auth-group/index", searchConfig: "/system/user/search-config", searchPeople: "/system/user/search", exportUsers: "/system/user/export-users", import: "/system/user/import", getStaff: "/site/user/info-config?type=staff", getStudent: "/site/user/info-config?type=student", delUsers: "/system/user/delete", getUserCfg: "/system/user/create-user-config", addUserCfg: "/system/user/add", addPersonalcenter: "/system/personal-center/add", dbList: "/system/db-config/list", userSearchV2: "/system/user/searchv2", systemExportUser: "/system/user/export-user-queue", importUserV2: "/system/user/importv2", saveSign: "/system/team/save", savevSign: "/system/team/savev", signList: "/system/team/lists", delSign: "/system/team/delete", saveStaff: "/system/team/staff-save", delStaff: "/system/team/staff-delete", addGroup: "/system/team/add-group", groupList: "/system/team/allv", groupLists: "/system/team/all", delGroup: "/system/team/del-group", departvManage: "/api/user/departv?type=manager", saveDepart: "/system/department/savev", saveJob: "/system/job/save-job-user", delDepart: "/system/department/deletev", exportDepart: "/system/department/export", delDepUser: "/system/job/del-job-user", systemJobList: "/system/job/all", sortJob: "/system/job/sort-all", addJob: "/system/job/add-job", delJob: "/system/job/del-job", deljobUser: "/system/job/del-job-user", getDepartJob: "/system/department/department-info", setDepartJob: "/system/department/set-depart-job", importJobUser: "/system/job/import-jobs", getJobUserList: "/system/job/job-user-list", updateJob: "/system/department/update-depart-job", infoAuofficialList: "/system/seal/official-seal-list", addOfficial: "/system/seal/add-official-seal", delOfficial: "/system/seal/del-official-seal", addofficialUser: "/system/seal/add-official-seal-user", delofficialUser: "/system/seal/del-official-seal-user", sealhistoryUser: "/system/seal/seal-history-user", sealhistory: "/system/seal/seal-history", officialsealUsers: "/system/seal/official-seal-users", exportsealHistory: "/system/seal/export-seal-history", signatureRecord: "/system/seal/personal-seal-record", recordExpord: "/system/seal/personal-seal-record-export", importtaguser: "/system/user/import-tag-user", downtaguser: "/system/user/down-tag-user", appslist: "/system/apps-type/list", appsreleas: "/system/apps-type/release", appsdelete: "/system/apps-type/delete", notifysave: "/system/notify/save", notifylist: "/system/notify/list", notifydetail: "/system/notify/detail", appsdetail: "/system/apps-type/detail", notifydelete: "/system/notify/delete", getServiceCount: "/system/statistics/service-count", getDepartCount: "/system/statistics/department-count", noticeSave: "/system/notification/save", deletenotice: "/system/notification/delete", noticeDetail: "/system/notification/detail", noticeList: "/system/notification/index", publishNotice: "/system/notification/publish", application: "/system/department/auth-tree?auth=application", classifyList: "/system/notification-type/all", classifySave: "/system/notification-type/add-group", classifyDel: "/system/notification-type/del-group", appssave: "/system/apps-type/save", appssort: "/system/apps-type/sort", siteconfigSave: "/system/site-options/save", carouselList: "/system/banner/list", carouselSave: "/system/banner/save", gethotList: "/system/app-special/get-hot-list", savehotApp: "/system/app-special/save-hot-app", getdefaultApp: "/system/default-app/index", deldefaultApp: "/system/default-app/delete", savedefaultApp: "/system/default-app/save", getComment: "/system/comment-manage/index", saveComment: "/system/comment-manage/save", getNoticeIndex: "/system/notice/index", saveNotice: "/system/notice/save", savesensitiveWord: "/system/sensitive/set-words", getWord: "/system/sensitive/get-words", savewechat: "/system/wechat-config/save", getwechat: "/system/wechat-config/info", thirdpartyList: "/system/thirdparty/index", addthirdParty: "/system/thirdparty/add", editthirdParty: "/system/thirdparty/edit", delthirdParty: "/system/thirdparty/delete", setStatus: "/system/thirdparty/set-status", getAuthList: "/system/system-auth-group/all-group", getAuthTree: "/system/auth-group/tree", getAuthPerson: "/system/system-auth-user/list", addAuthGrouTree: "/system/auth-group/add", renameAuthGrouTree: "/system/auth-group/rename", getAuthByPerson: "/system/user-auths/info-auth", deleteAuthGrouTree: "/system/auth-group/delete", getTagall: "/system/attribute-tag/all", setAuthGrouTree: "/system/auth-group/set", addAuthPerson: "/system/user-auth/save", addAuthGrou: "/system/system-auth-group/save", deleteAuthGrou: "/system/system-auth-group/del", addAdmin: "/system/system-auth-user/save", deleteadmin: "/system/system-auth-user/del-manage", delAuthAdmin: "/system/system-auth-user/del-user", jobSearch: "/system/user/user-job-search", getIndexService: "/system/statistics/index-service", getProfile: "/system/statistics/index-profile", getStatistics: "/system/statistics/index", getDepartDetail: "/system/statistics/department-detail", getErrorLog: "/system/statistics/errors", getServiceDetail: "/system/statistics/service-detail", getLoginConfig: "/api/login-config/get", setLoginConfig: "/system/login-config/set", systemFileList: "/system/file-export/get-list", systemAddExport: "/system/file-export/add-export-msg", systemUpdata: "/system/file-export/update-export-msg", systemDetail: "/system/file-export/delete", actionloglist: "/system/action-log/list", actionlogdetail: "/system/action-log/detail", saveMiniprogramConfig: "/system/miniprogram-config/save", getMiniprogramConfig: "/system/miniprogram-config/info", searchUser: "/system/user/search-user", searchJobUser: "/system/user/user-job-search", authOrize: "/system/system-auth-authorize/save", authOrizeList: "/system/system-auth-authorize/list", objectOption: "/system/system-auth-authorize/object-option", delAccredit: "/system/system-auth-authorize/del", accreditDet: "/system/system-auth-authorize/detail", jobAll: "/system/job/all", notifysort: "/system/notify/sort", dataList: "/system/data-source/list", dataSave: "/system/data-source/save", dataDel: "/system/data-source/delete", dbSave: "/system/db-config/save", dbDel: "/system/db-config/delete", dbConnect: "/system/db-config/connect", noticeFList: "/system/form-notice/index", noticeFSave: "/system/form-notice/save", noticeFDel: "/system/form-notice/delete", validatorList: "/system/form-validator/index", validatorSave: "/system/form-validator/save", validatorDel: "/system/form-validator/delete", wsList: "/system/form-rule/list", widgetSave: "/system/form-rule/save", widgetDel: "/system/form-rule/delete", prefixSave: "/system/prefix/save", prefixDel: "/system/prefix/delete", addTrigger: "/system/trigger/add", editTrigger: "/system/trigger/edit", deleteTrigger: "/system/trigger/delete", systemAppAll: "/system/app/all", enableTrigger: "/system/trigger/enable", disableTrigger: "/system/trigger/disable", getOcrList: "/system/ocr/list", crontablist: "/system/crontab/list", crontabedit: "/system/crontab/edit", crontabinfo: "/system/crontab/info", crontabstop: "/system/crontab/stop", crontabdel: "/system/crontab/del", crontabhistory: "/system/crontab/history", getuserConfig: "/system/user-auths/user-config", saveuserConfig: "/system/user-auths/save-user-config", examineList: "/system/examine/index", examhisList: "/system/examine/history", dealTask: "/system/examine/task-deal", getTaskList: "/system/examine/task-list", infoAuth: "/system/user-auths/info-auth", infoList: "/system/infomation/info", infoImport: "/system/infomation/import", infoImportResult: "/system/infomation/import-result", infoExport: "/system/infomation/export", infoExportResult: "/system/infomation/export-result", getDepart: "/api/user/departv?type=manager", printerlist: "/site/print/list", printerPDF: "/site/print/form-pdf", printNumList: "/site/print/print-list", printerAdminList: "/system/printer/lists", printerAdminEdit: "/system/printer/edit", printerAdminDelete: "/system/printer/delete", printerLog: "/system/printer/logs", printerHelp: "/site/print/help", printerLaunch: "/system/printer/lists", printYCount: "/site/print/year-count", qrcodeLogin: "/site/login/login-by-token", qrcodeScan: "/site/qrcode/scan", addPrint: "/site/print/add", errorTpl: "/api/print-pdf/error", getSite1: "/site/get_config", getDepartNew: "/system/department/auth-tree", getUser: "/system/user/search-user", datacenter: "/system/department/auth-tree?auth=datacenter", getMatter: "/system/app/search", sysappsdepart: "/system/app/search", messageCount: "/site/message/count", getMaterialClassify: "/system/material-classification/index", getMaterial: "/system/material-picture/index", visitsList: "/api/visits/list", getGrantMeLists: "/site/grant-account/grant-me", appsReport: "/site/apps-report/lists", allGrade: "/api/user/grade", newGetSetting: "/site/notice/personal-setting", subNotice: "/site/notice/save", sealCheckPwd: "/site/seal/seal-check-password", sealCheckModile: "/site/seal/seal-check-mobile", sealCheckToken: "/site/seal/get-sweep-code-token", setSealCheck: "/site/seal/set-seal-not-validate", getIdentitys: "/site/user/get-identitys", setIdentity: "/site/user/set-identity", setUnbind: "/site/user/unbind-wechat", changeUserLogin: "/site/grant-account/change-login-user", systemTree: "/system/department/system-auth-tree", keywordshot: "/site/apps/keywords-hot" } },
    e644: function(e, t, a) {
        "use strict";
        a("b4fb"), a("b130"), a("ecb4"), a("053b"), a("90aa");
        var n = a("c0a4"),
            i = a("e8d2"),
            s = a("5557"),
            o = a("1d8b"),
            c = {
                authKey: "authControl_key",
                usernameKey: "username_key",
                validationKey: "validation_key",
                siteConfigKey: "getSiteConfig",
                checkLogin: function() { return !!this.getCookieUid() },
                getCookieUid: function() { return i["a"].getCookie(i["a"].getUidKey()) },
                getUserInfo: function() { var e = s["a"].getSItem(this.usernameKey); return e || null },
                toLogin: function() {
                    if ("miniprogram" === window.__wxjs_environment && s["a"].getLItem("miniprogramBind")) wx.miniProgram.navigateBack();
                    else {
                        var e = o["a"].getApi("frameToLogin") + "?redirect_url=" + i["a"].getCurrUrl(),
                            t = i["a"].query("token"),
                            a = i["a"].query("ticket");
                        null != t ? e = e + "&token=" + t : null != a && (e = e + "&ticket=" + a), window.location.href = e
                    }
                },
                setSiteConfig: function(e) {
                    var t = this;
                    if (s["a"].getSItem(this.siteConfigKey)) return n["default"].prototype.siteConfig = s["a"].getSItem(this.siteConfigKey), this.setWebFacicon(n["default"].prototype.siteConfig), this.getControl(e), !0;
                    i["a"].appFetch({ method: "get", url: "getSiteConfig", data: { v: (new Date).getTime() } }, (function(a) { 0 == a.e ? (s["a"].setSItem(t.siteConfigKey, a.d), n["default"].prototype.siteConfig = a.d, t.setWebFacicon(a.d), t.getControl(e)) : n["default"].prototype.$message.error({ message: "获取网站基础信息失败，请刷新页面重试", showClose: !0 }) }), (function() { n["default"].prototype.$message.error({ message: "获取网站基础信息失败，请刷新页面重试", showClose: !0 }) }))
                },
                setWebFacicon: function(e) {
                    if (e.favicon_logo) {
                        var t = document.createElement("link");
                        t.rel = "shortcut icon", t.href = e.imghost + "/" + e.favicon_logo, document.head.appendChild(t)
                    }
                },
                getControl: function(e) {
                    var t = this;
                    if (!this.checkLogin()) return s["a"].getSItem(this.authKey) && this.delControl(), e(), !1;
                    var a = this.getUserInfo();
                    a && a.uid == this.getCookieUid() && s["a"].getSItem(this.authKey) ? e && e() : n["default"].prototype.appFetch({ method: "get", url: "getAllAuth" }, (function(a) { 0 == a.e ? (t.getUserInfoByApi(e), s["a"].setSItem(t.authKey, 0 == a.e ? a.d : {})) : n["default"].prototype.$message.error({ message: "获取用户权限失败，请刷新页面重试", showClose: !0 }) }), (function() { n["default"].prototype.$message.error({ message: "获取用户权限失败，请刷新页面重试", showClose: !0 }) }))
                },
                getUserInfoByApi: function(e) {
                    var t = this;
                    n["default"].prototype.appFetch({ method: "get", url: "getUserName" }, (function(a) { 0 == a.e ? (s["a"].setSItem(t.usernameKey, { name: a.d.name, uid: a.d.uid, college: a.d.college, sex: a.d.sex, avatar: a.d.avatar, administrative_level: a.d.administrative_level }), e && e()) : n["default"].prototype.$message.error({ message: "获取用户信息失败，请刷新页面重试", showClose: !0 }) }), (function() { n["default"].prototype.$message.error({ message: "获取用户信息失败，请刷新页面重试", showClose: !0 }) }))
                },
                loginOut: function(e) {
                    var t = this;
                    i["a"].appFetch({ method: "get", url: "logout" }, (function(a) {
                        if (0 == a.e)
                            if (t.delControl(), e) window.location.href = appConfig.baseUrl + "printer/login?casLogout=1";
                            else if (appConfig.logout) {
                            var i = "".concat(appConfig.logout, "?redirect_url=").concat(window.location.href);
                            window.location.href = i
                        } else window.location.href = appConfig.baseUrl + "site/login";
                        else n["default"].prototype.$message.error({ message: "退出登陆失败，请点击重试", showClose: !0 })
                    }), (function() { n["default"].prototype.$message.error({ message: "退出登陆失败，请点击重试", showClose: !0 }) }))
                },
                delControl: function() { s["a"].removeSItem(this.authKey), s["a"].removeSItem(this.usernameKey) },
                queryControl: function(e) { var t = s["a"].getSItem(this.authKey); return !(null == t || !t.permits) && (t.issuper || t.permits.includes(e)) },
                isAdmin: function() { var e = s["a"].getSItem(this.authKey); return null != e && (e.issuper || !!e.permits.length) },
                isSuper: function() { var e = s["a"].getSItem(this.authKey); return null != e && e.issuper },
                Screening: function(e, t) {
                    for (var a in t)
                        for (var n in t[a]) - 1 == n.indexOf("User_") && -1 == n.indexOf("Sync") && -1 == n.indexOf("Quote") || e[a] && t[a] && t[a][n] == e[a][n] && delete e[a][n];
                    return e
                }
            };
        n["default"].prototype.authH || (n["default"].prototype.authH = c), t["a"] = c
    },
    e8d2: function(e, t, a) {
        "use strict";
        a("dbb3"), a("fe59"), a("b130"), a("ecb4"), a("9302"), a("2eeb"), a("77ad"), a("ea69"), a("053b"), a("513c"), a("fe8a"), a("e18c"), a("84c2"), a("e35a"), a("1c2e"), a("90aa"), a("f4e3"), a("5e9f"), a("9cf3"), a("0d7a"), a("08ba");
        var n = a("e793"),
            i = a("f7f9"),
            s = a("5748"),
            o = a("c0a4"),
            c = a("6128"),
            r = a("1d8b"),
            u = a("9403"),
            d = {};
        o["default"].filter("Urlfilter", (function(e) { if ("" != e) return -1 != e.indexOf("http") ? e : o["default"].prototype.siteConfig.imghost + e })), d.debounce = function(e, t, a) {
            if ("function" !== typeof t) throw new TypeError("need a function");
            var n = "debounce_" + e;
            window[n] && clearTimeout(window[n]), window[n] = setTimeout((function() { t() }), a)
        }, d.getAgentParams = function(e) { return e.agent_uid ? { agent_uid: e.agent_uid ? e.agent_uid : 0, agent_department_id: e.agent_department_id ? e.agent_department_id : 0, agent_name: e.agent_name ? e.agent_name : "" } : {} }, d.getAgentInfo = function(e) { return e.id ? { agent_uid: e.id ? e.id : 0, agent_department_id: e.depart_id ? e.depart_id : 0 } : {} }, d.templateAnalysis = function(e) {
            if (!e.length) return "";
            var t = [],
                a = { formData: [], varData: [] };
            return e.split("{").forEach((function(e) { return t.push.apply(t, Object(s["a"])(e.split("}"))) })), t.forEach((function(e, t) { t % 2 == 1 && (0 == e.indexOf("form") ? a.formData.push(e) : 0 != e.indexOf("user") && 0 != e.indexOf("app") || a.varData.push(e)) })), a.formData.forEach((function(e) {
                var a = e.split("form")[1].slice(0, e.split("form")[1].indexOf("_")),
                    n = e.split("form")[1].slice(e.split("form")[1].indexOf("_") + 1),
                    i = "";
                if (window["tablevm".concat(a)] && window["tablevm".concat(a)].plugin.plugins[n]) {
                    var s = window["tablevm".concat(a)].plugin.plugins[n];
                    switch (s.type) {
                        case "dRegion":
                            i = s.data.address;
                            break;
                        case "dCalendar":
                            var o = new Date(s.data),
                                c = o.getFullYear() + "年",
                                r = (o.getMonth() + 1 < 10 ? "0" + (o.getMonth() + 1) : o.getMonth() + 1) + "月",
                                u = (o.getDate() < 10 ? "0" + o.getDate() : o.getDate()) + "日";
                            i = c + r + u;
                            break;
                        case "dOpinion":
                            i = s.attr.data.options.filter((function(e) { return e.value == s.data.option }))[0].name;
                            break;
                        default:
                            i = s.data instanceof Object && s.data.name ? s.data.name : s.data instanceof Array && s.data[0] && s.data[0].name ? s.data.map((function(e) { return e.name })).join("、") : s.data
                    }
                }
                t.splice(t.indexOf(e), 1, i)
            })), a.varData.forEach((function(e) { t.splice(t.indexOf(e), 1, window.$EVN["matter_".concat(e)] || "") })), t.join("")
        }, d.getUrlStr = function(e, t) { for (var a in e += "?", t) t[a] && (e += a + "=" + t[a] + "&"); return e.slice(0, -1) }, d.getUidKey = function() { return appConfig.userKeyPrefix ? appConfig.userKeyPrefix + "_" + appConfig.uidKey : appConfig.uidKey }, d.isEmptyObj = function(e) { return !e || !Object.keys(e).length }, d.appDetail = function(e, t) {
            if (e.details_page) this.appFetch({ method: "get", url: "getProcessInfoNew", data: { app_id: e.id } }, (function(a) {
                if (0 == a.e) {
                    if (a.d.nodes)
                        if (a.d.nodes.filter((function(e) { return "StartEvent" == e.node_type && !e.node_parent_id }))[0].steps) n = window.location.origin + (t ? "/v2/matter/m_startStep?id=" : "/v2/matter/startStep?id=") + e.id;
                        else n = window.location.origin + (t ? "/v2/matter/m_start?id=" : "/v2/matter/start?id=") + e.id;
                    else var n = window.location.origin + (t ? "/v2/matter/m_start?id=" : "/v2/matter/start?id=") + e.id;
                    "pku" == d.getWebId() && (n += "y" == sessionStorage.getItem("pku_hiddenHeader") ? "&hiddenHeader=y" : ""), d.isWeixin().isPhone ? location.href = n : window.open(n, "_blank")
                } else self.$message({ message: a.m, type: "error" })
            }), (function() { self.loading = !1 }));
            else { var a = window.location.origin + (t ? "/v2/matter/m_detail?id=" : "/v2/matter/detail?id=") + e.id; "pku" == d.getWebId() && (a += "y" == sessionStorage.getItem("pku_hiddenHeader") ? "&hiddenHeader=y" : ""), d.isWeixin().isPhone ? location.href = a : window.open(a, "_blank") }
        }, d.firstUppercase = function(e) { return !!e && (e = e.toString(), e.substr(0, 1).toUpperCase() + e.substr(1)) }, d.copyObj = function(e) { return JSON.parse(JSON.stringify(e)) }, d.copyObjFor = function(e) {
            function t(e) {
                if ("object" != Object(i["a"])(e)) return e;
                var a = {};
                if (Array.isArray(e) ? a = [] : null === e && (a = null), null !== a)
                    for (var n in e) a[n] = t(e[n]);
                return a
            }
            return t(e)
        }, d.getStyle = function(e, t) { e = this.copyObj(e); for (var a in e = Object(n["a"])(Object(n["a"])({}, e), t), e) NaN !== Number(e[a]) && isFinite(e[a]) && (e[a] = e[a] + "px"); return e }, d.fireEvent = function(e, t) {
            if (document.createEventObject) { var a = document.createEventObject(); return e.fireEvent("on" + t, a) }
            a = document.createEvent("HTMLEvents");
            return a.initEvent(t, !0, !0), !e.dispatchEvent(a)
        }, d.isWeixin = function() {
            var e = navigator.userAgent,
                t = e.indexOf("PKUiOS") > -1,
                a = e.indexOf("PKUAndroid") > -1,
                n = e.indexOf("Android") > -1 || e.indexOf("Adr") > -1 || a,
                i = !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) || t,
                s = n || i;
            e = e.toLowerCase();
            var o = "micromessenger" == e.match(/MicroMessenger/i) || "_sq_" == e.match(/_SQ_/i);
            return { isWeixin: o, isPhone: s, isAndroid: n }
        }, d.getCurrUrl = function() {
            var e = window.location.href,
                t = ["<", ">", ",", "$", "\\(", "\\)"];
            return t.forEach((function(t) { e = e.replace(t, "") })), encodeURIComponent(e)
        }, d.getCookie = function(e) { var t, a = new RegExp("(^| )" + e + "=([^;]*)(;|$)"); return (t = document.cookie.match(a)) ? unescape(t[2]) : null }, d.setBpmnProperties = function(e, t) { try { "undefined" == typeof e[0].tagName || "INPUT" !== e[0].tagName && "SELECT" !== e[0].tagName ? e.text(t) : e.val(t), this.fireEvent(e[0], "input"), this.fireEvent(e[0], "change") } catch (a) { console.log(e[0]), console.log(e.tagName), console.log(e), console.log(a) } }, d.getSpendTime = function(e, t) {
            if (void 0 != e) {
                if (e = e.replace(/\-/g, "/"), null != t) { t = t.replace(/\-/g, "/"); var a = new Date(t).getTime() - new Date(e).getTime() } else a = (new Date).getTime() - new Date(e).getTime();
                var n = parseInt(a / 1e3 / 60 / 60 / 24),
                    i = parseInt(a / 1e3 / 60 / 60 % 24),
                    s = parseInt(a / 1e3 / 60 % 60);
                return 0 == n && 0 == i && s <= 0 ? "一分钟以内" : 0 == n && 0 == i ? s + "分钟" : 0 == n ? i + "小时" + s + "分钟" : n + "天" + i + "小时" + s + "分钟"
            }
        }, d.query = function(e) {
            var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
                a = window.location.search.substr(1).match(t);
            return null != a ? unescape(a[2]) : null
        }, d.getUrlParam = function(e) {
            var t = e.split("?")[1].split("#")[0];
            if (!t) return {};
            for (var a = t.split("&"), n = {}, i = 0; i < a.length; i++) {
                var s = a[i].split("=")[0],
                    o = a[i].split("=")[1];
                n[s] = o
            }
            return n
        }, d.setVueData = function(e, t) { for (var a in t) e[a] = t[a] }, d.getWebId = function() { return appConfig.webId }, d.getWebStyle = function(e) { return this.getWebId() }, d.getClientType = function(e) { var t = e.replace("/", ""); return "m_" == t.substr(0, 2) }, d.mergeObj = function(e, t, a) { return e = e || {}, t = t || {}, a = a || {}, Object(n["a"])(Object(n["a"])(Object(n["a"])({}, e), t), a) }, d.timestampToTime = function(e) {
            var t = new Date(1e3 * e),
                a = t.getFullYear() + "-",
                n = (t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1) + "-",
                i = t.getDate() + " ",
                s = t.getHours() + ":",
                o = t.getMinutes() + ":",
                c = t.getSeconds();
            return a + n + i + s + o + c
        }, d.getStrTime = function(e, t) {
            var a = t ? new Date(t) : new Date,
                n = {};
            for (var i in n["Y"] = a.getFullYear(), n["m"] = a.getMonth() + 1, n["d"] = a.getDate(), n["H"] = a.getHours(), n["i"] = a.getMinutes(), n["s"] = a.getSeconds(), n["m"] = n["m"] >= 10 ? n["m"] : "0" + n["m"], n["d"] = n["d"] >= 10 ? n["d"] : "0" + n["d"], n["H"] = n["H"] >= 10 ? n["H"] : "0" + n["H"], n["i"] = n["i"] >= 10 ? n["i"] : "0" + n["i"], n["s"] = n["s"] >= 10 ? n["s"] : "0" + n["s"], n) e = e.replace(i, n[i]);
            return e
        }, d.swapArray = function(e, t, a) { return e[t] = e.splice(a, 1, e[t])[0], e }, d.getDocumentTitle = function(e, t) { "buaa" == appConfig.webId ? document.title = "学生临时出入校申请" : "pku" == appConfig.webId ? document.title = "北京大学网上办事大厅" : document.title = e }, d.toExtend = function(e, t) {
            switch (e.type) {
                case "download":
                    var a = r["a"].getApi(e.url);
                    window.open(this.setGetUrl(a, t));
                    break
            }
        }, d.setGetUrl = function(e, t) { var a = ""; for (var n in t) a += n + "=" + t[n] + "&"; return a && (a = a.slice(0, -1)), e + "?" + a }, d.closePage = function() { var e = navigator.appName; "Netscape" == e && (window.open("", "_self", ""), window.close()), "Microsoft Internet Explorer" == e && (window.parent.opener = "whocares", window.parent.close()) }, d.isUrl = function(e) { var t = /^(?=^.{3,255}$)(http(s)?:\/\/)(www\.)?/; return t.test(e) }, d.getWordLength = function(e) { var t = 0; try { e = e.replace(/(\r\n+|\s+|　+)/g, "龘"), e = e.replace(/[\x00-\xff]/g, "m"), e = e.replace(/m+/g, "*"), e = e.replace(/龘+/g, ""), t = e.length } catch (a) {} return t }, d.validateWordNumber = function(e, t, a) { var n = d.getWordLength(e); return t && a ? !!(n <= t && n >= a) : t && !a ? !!(n <= t) : !t && a ? !!(n >= a) : void 0 }, d.toInfoCenter = function() {
            var e = u["a"].getConfigId("ucenterPath", window.location.hostname);
            if (e.includes(".")) {
                var t = "";
                e.includes("http") || (t = "".concat(window.location.protocol, "//")), window.open(t + e, "_blank")
            } else window.open(appConfig.baseUrl + e, "_blank")
        }, d.minipDownloadFile = function(e, t) { "miniprogram" === window.__wxjs_environment ? d.appFetch({ url: "getDownloadFile", method: "get", data: { id: t } }).then((function(e) { 0 == e.e ? wx.miniProgram.navigateTo({ url: "../downloadFile/downloadFile?downloadUrl=".concat(encodeURIComponent(e.d)) }) : 1 == e.e ? o["default"].prototype.$message({ message: "文件大于50M，不能通过小程序 下载，请到电脑进行下载", type: "warning", showClose: !0 }) : o["default"].prototype.$message({ type: "error", message: e.m, showClose: !0 }) })).catch((function(e) { o["default"].prototype.$message({ type: "error", message: "系统错误", showClose: !0 }) })) : window.open(e) }, d.appFetch = c["a"], o["default"].prototype.appCommonH || (o["default"].prototype.appCommonH = d), t["a"] = d
    }
});
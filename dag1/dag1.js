let puzzleInput = `258
92
2
82
54
261
99
17
69
130
100
236
120
125
93
155
61
237
48
123
207
206
126
211
165
198
236
227
189
105
50
56
202
152
205
114
226
34
86
239
221
91
27
238
82
9
25
57
174
23
53
128
115
104
66
174
25
232
126
89
109
2
75
118
113
138
226
73
161
109
134
31
118
132
48
46
124
219
203
31
222
198
105
236
220
146
52
98
99
32
44
3
165
54
83
237
179
163
116
2
234
223
33
32
238
50
225
132
103
166
129
134
134
215
200
54
40
127
102
237
78
258
214
108
256
183
132
209
16
248
59
91
12
108
229
109
210
146
175
214
103
70
207
155
214
85
168
8
262
228
28
38
78
167
105
263
111
230
264
127
169
248
245
173
104
17
2
191
212
168
162
138
237
164
257
162
243
186
40
88
93
86
216
63
40
71
166
127
150
184
140
24
256
186
113
44
256
228
102
130
120
248
253
202
121
70
77
203
35
131
161
103
81
31
214
54
85
103
223
234
1
107
189
223
22
264
32
32
50
8
67
43
111
46
205
148
38
156
8
158
76
238
151
239
141
117
169
97
37
112
83
89
123
114
124
3
55
260
209
262
222
65
14
27
189
219
219
234
24
46
162
86
19
116
113
27
155
147
109
198
149
246
262
41
90
76
205
176
178
94
187
92
187
244
21
229
135
8
155
4
15
202
141
46
66
73
256
36
231
200
67
233
252
45
172
162
245
73
196
128
163
128
155
121
200
196
138
31
4
113
233
91
77
246
60
39
119
129
45
224
191
176
102
73
177
61
220
231
245
133
37
124
179
56
22
27
171
45
158
101
187
24
40
194
156
84
58
169
23
166
136
234
247
247
208
254
9
188
178
166
140
162
78
39
233
123
103
263
77
170
107
138
46
120
123
77
243
253
229
65
180
125
146
143
12
240
250
57
80
254
121
146
44
109
15
146
77
43
156
6
202
78
12
3
87
114
221
215
56
255
153
48
61
82
148
146
221
26
75
235
251
130
175
215
167
146
241
200
67
198
117
234
66
34
155
175
250
36
96
34
7
243
214
38
118
25
75
152
150
188
111
73
151
73
190
172
186
96
23
181
36
25
73
115
45
211
254
139
125
57
170
33
153
207
205
179
187
119
82
50
217
262
191
47
263
229
109
78
140
263
99
31
116
46
218
156
37
101
56
231
71
88
60
174
141
21
134
200
63
143
126
150
247
3
21
149
43
11
189
137
62
209
236
21
49
160
147
221
260
226
33
218
25
188
213
218
211
169
163
47
211
128
134
39
111
208
258
258
213
69
111
167
236
154
117
146
64
44
155
45
224
10
209
252
14
31
189
212
190
131
147
14
100
178
157
182
94
36
182
219
75
204
235
168
61
178
245
43
136
177
205
249
110
171
22
143
90
121
69
186
32
252
263
62
190
43
164
230
217
113
110
19
67
81
262
52
181
143
27
137
16
23
228
125
31
39
94
108
237
48
238
97
212
209
175
246
108
8
15
208
42
182
246
107
242
210
203
189
46
184
213
26
157
91
23
11
128
175
72
5
152
227
71
33
201
216
136
224
110
165
152
190
176
187
138
225
68
150
168
64
252
80
96
3
142
32
153
168
182
198
83
29
260
193
99
16
146
260
185
215
59
48
188
23
247
22
165
40
208
105
140
109
64
25
99
175
64
119
18
101
50
146
215
140
190
96
216
84
76
69
142
71
190
97
72
62
122
251
221
262
121
220
188
104
72
162
117
84
212
38
126
67
161
115
157
188
120
36
103
197
203
8
85
230
208
3
40
56
180
43
249
182
85
24
154
84
31
89
226
13
112
31
9
77
6
116
127
111
227
26
34
183
21
92
260
23
20
238
100
190
62
102
118
166
118
107
144
173
59
45
197
260
163
131
50
43
242
205
170
241
129
238
72
199
22
75
47
212
206
152
25
220
199
93
157
156
222
205
212
159
255
213
4
227
172
27
43
12
124
226
78
186
149
34
115
239
42
130
157
225
192
37
99
194
145
135
264
216
101
87
220
188
116
91
26
121
43
61
113
12
140
260
205
227
3
14
88
241
89
148
258
31
101
61
68
167
5
107
110
47
166
41
45
56
186
136
18
98
119
122
59
28
238
89
157
100
71
110
167
135
30
174
10
214
135
112
209
186
48
227
212
180
156
120
149
91
71
237
96
190
22
180
147
130
53
6
233
71
111
246
183
33
126
221
24
254
86
213
208
190
38
192
36
145
198
77
21
43
81
202
136
252
233
135
29
254
101
251
35
89`;

const unsInGrams = 28;
let puzzleArray = puzzleInput.split('\n');
let goodBarrels = 0;

for (x in puzzleArray) {
    let weightInGrams = parseInt(puzzleArray[x])*unsInGrams;
    2000 <= weightInGrams && weightInGrams <= 3000 ? goodBarrels++ : false;
}

console.log(goodBarrels);

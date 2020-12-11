package ga.eliko.pronounsa.re

import io.micronaut.runtime.Micronaut.*
fun main(args: Array<String>) {
	build()
	    .args(*args)
		.packages("ga.eliko.pronounsa.re")
		.start()
}


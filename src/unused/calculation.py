from num2words import num2words





def add(*args, lang="en"):
    nums = [arg for arg in args]
    num_out = sum(nums)
    num_out_long = " + " .join([str(num) for num in nums])
    word_out = num2words(num_out, lang=lang)
    word_out_long = " + " .join([num2words(num, lang=lang) for num in nums])
    return(num_out_long, num_out, word_out_long, word_out)

num_out_long, num_out, word_out_long, word_out = add(2, 3, 4, lang="es")
# num_out_long, num_out, word_out_long, word_out = add([arr], lang="es") <-- can input infinite amount of numbers?
# num_out_long, num_out, word_out_long, word_out = add(input_one, input_two, input_three, lang="es") <-- limits users to 3 numbers?



print(f'{num_out_long} = {num_out}')
print(f'{word_out_long} = {word_out}')